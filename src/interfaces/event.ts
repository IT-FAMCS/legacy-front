export interface EventLink {
  link: string;
  title: string;
}

export interface EventInfo {
  id?: number;
  links: EventLink[];
  short_title: string;
  title: string;
  description: string;
  structure: string;
  work: string;
  FAQ: string;
}
