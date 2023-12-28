import { notFound } from 'next/navigation';
import ProjectDetailPageComponent from '@/components/pages/ProjectDetailPageComponent';
import { ProjectData, getAllProjectIds, getProjectData } from '@/lib/project';

interface ProjectDetailPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params: { slug },
}: ProjectDetailPageProps) {
  const { frontMatter: project } = (await getProjectData(slug)) as ProjectData;

  return {
    title: `${project.title} | Project`,
    description: project.description,
    keywords: project.tags.join(','),
    openGraph: {
      title: `${project.title} | Project`,
      description: project.description,
      images: project.image,
    },
  };
}

export function generateStaticParams() {
  const projectIds = getAllProjectIds();

  return projectIds.map((id) => ({
    slug: id,
  }));
}

export default async function ProjectDetailPage({
  params: { slug },
}: ProjectDetailPageProps) {
  if (!getAllProjectIds().includes(slug)) {
    return notFound();
  }

  const projectData = await getProjectData(slug);

  if (!projectData) {
    return notFound();
  }

  return (
    <ProjectDetailPageComponent
      project={projectData.frontMatter}
      content={projectData.content}
    />
  );
}
