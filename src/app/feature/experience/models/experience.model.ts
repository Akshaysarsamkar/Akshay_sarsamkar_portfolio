export interface TechnologyItem {
  name: string;
  iconSvg?: string;
  color?: string;
}

export interface Experience {
  id: string;
  company: string;
  companyShort: string;
  role: string;
  location: string;
  period: string;           // e.g. "Mar 2024 – Present"
  duration: string;         // e.g. "1+ years"
  dateRangeDisplay: string;  // e.g. "2024 – Present"
  description: string;
  technologies: TechnologyItem[];
  current: boolean;
  logoBgLight?: string;
  logoBgDark?: string;
  logoSvg: string;
}
