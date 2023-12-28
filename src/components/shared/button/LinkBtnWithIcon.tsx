import { FaArrowRight } from 'react-icons/fa';
import Button from './Button';
import { IconType } from 'react-icons';

interface ButtonWithIconProps {
  onClick?: () => void;
  type?: 'button' | 'submit';
  href?: string;
  target?: '_self' | '_blank';
  children: string;
  StartIcon?: IconType;
  EndIcon?: IconType;
}

export default function ButtonWithIcon({
  onClick,
  type,
  href,
  target = '_self',
  StartIcon,
  EndIcon,
  children,
}: ButtonWithIconProps) {
  return (
    <Button
      onClick={onClick}
      type={type}
      href={href}
      target={target}
      className="group flex items-center"
    >
      {StartIcon && (
        <StartIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition ease-out" />
      )}
      <span>{children}</span>
      {EndIcon && (
        <EndIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition ease-out" />
      )}
    </Button>
  );
}
