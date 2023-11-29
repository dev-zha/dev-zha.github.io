import AboutMe from './AboutMe';
import Articles from './Articles';
import GetInTouch from './GetInTouch';
import MainVisual from './MainVisual';
import Projects from './Projects';
import Skills from './Skills';

export default function HomePageComponent() {
  return (
    <>
      <MainVisual />
      <AboutMe />
      <Skills />
      <Projects />
      <Articles />
      <GetInTouch />
    </>
  );
}
