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
  preparations: string;
  info: string;
  dates: string;
  FAQ: string;
}
