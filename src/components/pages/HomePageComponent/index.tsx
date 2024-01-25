import MainVisual from './MainVisual';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Blogs from './Blogs';
import { getSortedBlogsData } from '@/lib/blog';
import { getSortedProjectsData } from '@/lib/project';
import ContactMe from './ContactMe';

export default function HomePageComponent() {
  const blogs = getSortedBlogsData();
  const projects = getSortedProjectsData();

  return (
    <>
      <MainVisual />
      <AboutMe />
      <Skills />
      <Projects projects={projects} />
      <Blogs blogs={blogs} />
      <ContactMe/>
    </>
  );
}
