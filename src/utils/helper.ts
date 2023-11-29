import { Project } from '@/types/project';
import { Article } from '@/types/article';
import projectsData from '../data/projects.json';
import articlesData from '../data/articles.json';

export const getProjects = (): Project[] => {
  return projectsData;
};

export const getArticles = (): Article[] => {
  return articlesData;
};

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
