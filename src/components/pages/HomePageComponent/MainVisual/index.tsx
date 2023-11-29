import BackgroundLogo from './BackgroundLogo';
import Info from './Info';
import SketchProfile from './SketchProfile';

export default function MainVisual() {
  return (
    <div className="relative w-full h-screen bg-primary-500/10">
      <div className="flex items-center justify-end h-screen">
        <BackgroundLogo />
      </div>
      <main className="absolute top-0 left-0 right-0 bottom-0 pt-20 pb-12">
        <div className="flex flex-col-reverse md:flex-row justify-center gap-8 md:items-center md:justify-between max-w-screen-lg h-full px-10 mx-auto lg:px-5">
          <Info />
          <div className="h-[50vh] md:h-full">
            <SketchProfile />
          </div>
        </div>
      </main>
    </div>
  );
}
