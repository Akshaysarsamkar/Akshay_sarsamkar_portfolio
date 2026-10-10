export interface ServiceTechnology {
  name: string;
  color: string;
}

export interface Service {
  id: string;
  number: string;         // e.g. '01', '02'
  title: string;
  description: string;
  technologies: ServiceTechnology[];
  iconSvg: string;        // Inline SVG string
  iconColor: string;      // Primary accent color for icon glow
  featured?: boolean;     // First 4 get arrow visibility boost
}
