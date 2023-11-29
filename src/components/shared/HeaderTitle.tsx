import { Variants, motion } from 'framer-motion';

interface HeaderTitleProps {
  children: React.ReactNode;
  variants?: Variants;
}
export default function HeaderTitle({ children, variants }: HeaderTitleProps) {
  const RenderElement = variants ? motion.h2 : 'h2';
  return (
    <RenderElement
      className="text-primary-700 text-3xl font-bold"
      variants={variants}
    >
      {children}
    </RenderElement>
  );
}
