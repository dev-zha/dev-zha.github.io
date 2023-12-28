import { classNames } from '@/utils/helper';

interface ChipProps {
  children: string;
  className?: string;
}

export default function Chip({ children, className = '' }: ChipProps) {
  return (
    <span
      className={classNames(
        'inline-block text-xs font-medium border rounded-2xl px-2.5 py-0.5',
        className || 'bg-gray-100/10 text-gray-400 border-gray-400'
      )}
    >
      {children}
    </span>
  );
}
