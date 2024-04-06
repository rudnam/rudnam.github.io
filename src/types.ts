export interface Project {
  image: string;
  title: string;
  description: string;
  url: string;
  links?: Link[];
  technologies?: string[];
  hide?: boolean;
}

interface Link {
  label: string;
  url: string;
}
