import MainVisual from './MainVisual';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Blogs from './Blogs';
import GetInTouch from './GetInTouch';
import { getSortedBlogsData } from '@/lib/blog';
import { getSortedProjectsData } from '@/lib/project';

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
      <GetInTouch />
    </>
  );
}
