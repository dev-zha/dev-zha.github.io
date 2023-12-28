import fs from 'fs-extra';
import path from 'path';
import { Project } from '@/types/project';
import { PROJECT_DOCS_DIR } from '@/utils/constants';
import projects from '@/data/projectSchema.generated.json';

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id) || [];
}

export function getSortedProjectsData(): Project[] {
  return projects.sort((a, b) => a.order - b.order);;
}

export interface ProjectData {
  frontMatter: Project;
  content: string;
}
export async function getProjectData(id: string): Promise<ProjectData | null> {
  try {
    const fullPath = path.join(PROJECT_DOCS_DIR, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const projectMatterData = projects?.filter((p) => p.id === id)[0];

    const contentWithoutFrontMatter = fileContents
      .replace(/---([\s\S]*?)---/, '')
      .trim();

    if (!projectMatterData || !contentWithoutFrontMatter) {
      return null;
    }

    return {
      frontMatter: projectMatterData,
      content: contentWithoutFrontMatter,
    };
  } catch (_) {
    return null;
  }
}
