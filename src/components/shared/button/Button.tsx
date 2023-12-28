import { classNames } from '@/utils/helper';
import Link from 'next/link';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit';
  href?: string;
  target?: '_self' | '_blank';
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  onClick,
  type = 'button',
  href,
  target = '_self',
  className = '',
  children,
}: ButtonProps) {
  const buttonStyle = classNames(
    'text-white font-medium text-sm bg-primary-500 hover:bg-primary-600 rounded-xl px-5 py-2.5 focus:outline-none',
    className
  );

  if (href) {
    return (
      <Link href={href} target={target} className={buttonStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
}
