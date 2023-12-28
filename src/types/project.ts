export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  order: number;
  sourceCode?: string;
  liveUrl?: string;
}
