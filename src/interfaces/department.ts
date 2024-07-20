export interface DepartmentLink {
  link: string;
  title: string;
}

export interface DepatmentInfo {
  id?: number;
  links: DepartmentLink[];
  short_title: string;
  title: string;
  description: string;
  structure: string;
  work: string;
  in_events: string;
  FAQ: string;
}
