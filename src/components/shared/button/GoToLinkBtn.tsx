import { FaArrowRight } from 'react-icons/fa';
import ButtonWithIcon from './LinkBtnWithIcon';

interface GoToLinkBtnProps {
  href: string;
  children: string;
}

export default function GoToLinkBtn({ href, children }: GoToLinkBtnProps) {
  return (
    <ButtonWithIcon href={href} EndIcon={FaArrowRight}>
      {children}
    </ButtonWithIcon>
  );
}
