export interface Project {
  image: string;
  title: string;
  description: string;
  url: string;
  links?: Link[];
  technologies?: string[];
}

interface Link {
  label: string;
  url: string;
}
