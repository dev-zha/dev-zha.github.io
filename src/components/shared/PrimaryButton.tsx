import { classNames } from '@/utils/helper';

interface PrimaryButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
}

export default function PrimaryButton({
  children,
  type = 'button',
  onClick,
  className = '',
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        'text-white font-medium text-sm bg-primary-500 hover:bg-primary-600 rounded-xl px-5 py-2.5 focus:outline-none',
        className
      )}
    >
      {children}
    </button>
  );
}
