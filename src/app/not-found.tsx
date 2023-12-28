import LoadingLogo from '@/components/shared/LoadingLogo';
import GoBackBtn from '@/components/shared/button/GoBackBtn';

interface ErrorNumberProps {
  children: string;
}

function ErrorNumber({ children }: ErrorNumberProps) {
  return (
    <span className="text-primary text-[100px] sm:text-[160px] font-bold font-mono leading-none">
      {children}
    </span>
  );
}
export default function NotFound() {
  return (
    <div className="w-full h-full pt-14 my-auto">
      <div className="flex flex-col items-center justify-center gap-4 text-center p-4 ">
        <div className="flex items-center gap-4">
          <ErrorNumber>4</ErrorNumber>
          <LoadingLogo className="bg-primary text-white" />
          <ErrorNumber>4</ErrorNumber>
        </div>
        <h1 className="text-neutral-700 text-3xl font-bold font-mono">
          Page Not Found
        </h1>
        <p className="text-neutral-500 font-medium">
          The resource requested could not be found on this server
        </p>
        <GoBackBtn />
      </div>
    </div>
  );
}
