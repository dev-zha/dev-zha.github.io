'use client';

import MHeaderTitle from '@/components/shared/motion/MHeaderTitle';
import MContainer from '@/components/shared/motion/MContainer';
import { Blog } from '@/types/blog';
import GoToListBtn from './GoToListBtn';
import CardList from './CardList';

interface BlogsProps {
  blogs: Blog[];
}

export default function Blogs({ blogs }: BlogsProps) {
  return (
    <MContainer id="blogs">
      <MHeaderTitle>Blogs</MHeaderTitle>
      <CardList blogs={blogs} />
      <GoToListBtn />
    </MContainer>
  );
}
