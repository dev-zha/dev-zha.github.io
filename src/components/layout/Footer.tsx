import { profileData } from '@/data/profile';

export default function Footer() {
  return (
    <div className="backdrop-blur bg-white/30 border-t border-gray-200 p-4 text-center">
      <span className="text-gray-500 text-sm">
        Designed and Built by
        <span className="font-medium font-mono animate-pulse">
          &nbsp;{profileData.name}
        </span>
      </span>
    </div>
  );
}
