import { FaArrowRight } from 'react-icons/fa';
import PrimaryButton from './PrimaryButton';

interface LinkToButtonProps {
  children: string;
  onClick?: () => void;
}

export default function LinkToButton({ children, onClick }: LinkToButtonProps) {
  return (
    <PrimaryButton className="group flex items-center" onClick={onClick}>
      <span>{children}</span>
      <FaArrowRight className="w-4 h-4 ms-2 group-hover:translate-x-1 transition ease-out" />
    </PrimaryButton>
  );
}
