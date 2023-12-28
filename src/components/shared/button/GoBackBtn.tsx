'use client';

import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import ButtonWithIcon from './LinkBtnWithIcon';

export default function GoBackBtn() {
  const router = useRouter();

  return (
    <ButtonWithIcon onClick={() => router.back()} StartIcon={FaArrowLeft}>
      Go Back
    </ButtonWithIcon>
  );
}
