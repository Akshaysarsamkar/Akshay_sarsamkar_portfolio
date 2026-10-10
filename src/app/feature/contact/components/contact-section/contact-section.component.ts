import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import * as THREE from 'three';

interface ContactChannel {
  name: string;
  label: string;
  value: string;
  url: string;
  iconType: 'email' | 'linkedin' | 'github' | 'leetcode' | 'location';
  actionText: string;
  isCopyable?: boolean;
}

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent implements OnDestroy {
  @ViewChild('successCanvas', { static: false }) successCanvasRef?: ElementRef<HTMLCanvasElement>;

  private readonly fb = inject(FormBuilder);
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);

  readonly isVisible = signal<boolean>(false);
  readonly isSubmitting = signal<boolean>(false);
  readonly isSubmitted = signal<boolean>(false);
  readonly copiedEmail = signal<boolean>(false);

  submittedName = '';

  // Three.js Success Scene Instances
  private successRenderer?: THREE.WebGLRenderer;
  private successScene?: THREE.Scene;
  private successCamera?: THREE.PerspectiveCamera;
  private successPlaneMesh?: THREE.Mesh;
  private successAnimFrameId?: number;
  private successTargetMouseX = 0;
  private successTargetMouseY = 0;

  readonly projectTags: string[] = [
    'Frontend App',
    'Angular / React',
    'Full-Stack Solution',
    'UI/UX Architecture',
    'Consulting / Freelance',
  ];

  readonly contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    projectType: ['Frontend App'],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly channels: ContactChannel[] = [
    {
      name: 'Email',
      label: 'Direct Email',
      value: 'akshay.sarsamkar@email.com',
      url: 'mailto:akshay.sarsamkar@email.com',
      iconType: 'email',
      actionText: 'Send Email',
      isCopyable: true,
    },
    {
      name: 'LinkedIn',
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/akshay-sarsamkar',
      url: 'https://www.linkedin.com/in/akshay-sarsamkar',
      iconType: 'linkedin',
      actionText: 'Connect',
    },
    {
      name: 'GitHub',
      label: 'GitHub Profile',
      value: 'github.com/Akshaysarsamkar',
      url: 'https://github.com/Akshaysarsamkar',
      iconType: 'github',
      actionText: 'View Code',
    },
    {
      name: 'LeetCode',
      label: 'LeetCode Profile',
      value: 'leetcode.com/akshay-sarsamkar',
      url: 'https://leetcode.com/akshay-sarsamkar',
      iconType: 'leetcode',
      actionText: 'View Problems',
    },
  ];

  constructor() {
    afterNextRender(() => {
      if (typeof window === 'undefined') return;
      const hostEl = this.elementRef.nativeElement;

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                this.isVisible.set(true);
                observer.disconnect();
                break;
              }
            }
          },
          { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
        );
        observer.observe(hostEl);
        this.destroyRef.onDestroy(() => observer.disconnect());
      } else {
        this.isVisible.set(true);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyThreeSuccess();
  }

  selectTag(tag: string): void {
    this.contactForm.patchValue({ projectType: tag });
  }

  async copyEmail(): Promise<void> {
    const email = 'akshay.sarsamkar@email.com';
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email);
        this.copiedEmail.set(true);
        setTimeout(() => this.copiedEmail.set(false), 2500);
      }
    } catch {
      this.copiedEmail.set(true);
      setTimeout(() => this.copiedEmail.set(false), 2500);
    }
  }

  onSubmit(): void {
    if (this.contactForm.invalid || this.isSubmitting()) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submittedName = this.contactForm.get('name')?.value || '';
    this.isSubmitting.set(true);

    // Simulate sending message with realistic turnaround
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.contactForm.reset({ projectType: 'Frontend App' });

      // Initialize celebratory 3D Three.js animation once the success card is mounted
      setTimeout(() => {
        this.initThreeSuccess();
      }, 60);
    }, 850);
  }

  resetForm(): void {
    this.destroyThreeSuccess();
    this.isSubmitted.set(false);
  }

  onSuccessMouseMove(event: MouseEvent): void {
    if (!this.successCanvasRef) return;
    const rect = this.successCanvasRef.nativeElement.getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

    this.successTargetMouseX = Math.max(-1.5, Math.min(1.5, x));
    this.successTargetMouseY = Math.max(-1.5, Math.min(1.5, y));
  }

  onSuccessMouseLeave(): void {
    this.successTargetMouseX = 0;
    this.successTargetMouseY = 0;
  }

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ==========================================
  //  THREE.JS SUCCESS ANIMATION
  // ==========================================

  private initThreeSuccess(): void {
    if (!this.successCanvasRef) return;
    const canvas = this.successCanvasRef.nativeElement;
    const width = canvas.clientWidth || 360;
    const height = canvas.clientHeight || 200;

    const scene = new THREE.Scene();
    this.successScene = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.2);
    this.successCamera = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.successRenderer = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(2, 4, 3);
    scene.add(dirLight);

    const blueLight = new THREE.PointLight(0x60a5fa, 3.5, 8);
    blueLight.position.set(-2, 2, 2);
    scene.add(blueLight);

    // 1. Origami Paper Plane
    const planeGeom = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      // Top Left Wing
      0, 0, 1.3,   0, 0.15, -0.9,   -1.3, 0.22, -0.7,
      // Top Right Wing
      0, 0, 1.3,   1.3, 0.22, -0.7,   0, 0.15, -0.9,
      // Left Under-keel
      0, 0, 1.3,   -1.3, 0.22, -0.7,   0, -0.4, -0.8,
      // Right Under-keel
      0, 0, 1.3,   0, -0.4, -0.8,   1.3, 0.22, -0.7,
      // Keel left
      0, 0, 1.3,   0, -0.4, -0.8,   0, 0.15, -0.9,
      // Keel right
      0, 0, 1.3,   0, 0.15, -0.9,   0, -0.4, -0.8,
    ]);
    planeGeom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    planeGeom.computeVertexNormals();

    const planeMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      roughness: 0.35,
      metalness: 0.2,
      side: THREE.DoubleSide,
      flatShading: true,
    });
    const planeMesh = new THREE.Mesh(planeGeom, planeMat);
    planeMesh.rotation.y = Math.PI + 0.35;
    planeMesh.rotation.x = 0.22;
    scene.add(planeMesh);
    this.successPlaneMesh = planeMesh;

    // 2. Celebratory 3D Confetti Particles
    const confettiCount = 65;
    const confettiGeom = new THREE.PlaneGeometry(0.08, 0.05);
    const colorsList = [0x3b82f6, 0x60a5fa, 0x8b5cf6, 0x10b981, 0xfbbf24, 0xf43f5e];
    const confettiGroup = new THREE.Group();

    const confettiData: Array<{
      mesh: THREE.Mesh;
      speedY: number;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      wobbleSpeed: number;
    }> = [];

    for (let i = 0; i < confettiCount; i++) {
      const col = colorsList[i % colorsList.length];
      const mat = new THREE.MeshStandardMaterial({
        color: col,
        roughness: 0.4,
        side: THREE.DoubleSide,
      });
      const cMesh = new THREE.Mesh(confettiGeom, mat);
      cMesh.position.set(
        (Math.random() - 0.5) * 3.6,
        (Math.random() - 0.5) * 2.8,
        (Math.random() - 0.5) * 2.0
      );
      cMesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );
      confettiGroup.add(cMesh);

      confettiData.push({
        mesh: cMesh,
        speedY: Math.random() * 0.008 + 0.004,
        rotSpeedX: (Math.random() - 0.5) * 0.06,
        rotSpeedY: (Math.random() - 0.5) * 0.06,
        rotSpeedZ: (Math.random() - 0.5) * 0.06,
        wobbleSpeed: Math.random() * 2 + 1,
      });
    }
    scene.add(confettiGroup);

    // Render loop outside Angular Zone
    this.ngZone.runOutsideAngular(() => {
      let mouseX = 0;
      let mouseY = 0;

      const animate = (timestamp: number) => {
        this.successAnimFrameId = requestAnimationFrame(animate);

        const time = timestamp * 0.001;

        // Smooth mouse lerp
        mouseX += (this.successTargetMouseX - mouseX) * 0.08;
        mouseY += (this.successTargetMouseY - mouseY) * 0.08;

        if (planeMesh) {
          planeMesh.position.y = Math.sin(time * 2.5) * 0.12 - mouseY * 0.2;
          planeMesh.position.x = Math.sin(time * 1.5) * 0.08 + mouseX * 0.3;
          planeMesh.rotation.z = Math.sin(time * 2.0) * 0.08 - mouseX * 0.3;
          planeMesh.rotation.x = 0.22 + Math.sin(time * 2.5) * 0.05 + mouseY * 0.2;
          planeMesh.rotation.y = Math.PI + 0.35 + mouseX * 0.4;
        }

        // Animate confetti flutter
        for (let i = 0; i < confettiData.length; i++) {
          const item = confettiData[i];
          item.mesh.position.y -= item.speedY;
          item.mesh.position.x += Math.sin(time * item.wobbleSpeed + i) * 0.002;
          item.mesh.rotation.x += item.rotSpeedX;
          item.mesh.rotation.y += item.rotSpeedY;
          item.mesh.rotation.z += item.rotSpeedZ;

          if (item.mesh.position.y < -1.8) {
            item.mesh.position.y = 1.8;
            item.mesh.position.x = (Math.random() - 0.5) * 3.6;
          }
        }

        renderer.render(scene, camera);
      };

      this.successAnimFrameId = requestAnimationFrame(animate);
    });
  }

  private destroyThreeSuccess(): void {
    if (this.successAnimFrameId) {
      cancelAnimationFrame(this.successAnimFrameId);
      this.successAnimFrameId = undefined;
    }
    if (this.successRenderer) {
      this.successRenderer.dispose();
      this.successRenderer = undefined;
    }
    if (this.successScene) {
      this.successScene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      this.successScene = undefined;
    }
    this.successPlaneMesh = undefined;
    this.successCamera = undefined;
  }
}
