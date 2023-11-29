import HeaderTitle from '../HeaderTitle';

interface MHeaderTitleProps {
  children: React.ReactNode;
}
export default function MHeaderTitle({ children }: MHeaderTitleProps) {
  return (
    <HeaderTitle
      variants={{
        offscreen: {
          y: -30,
        },
        onscreen: {
          y: 0,
          transition: {
            type: 'spring',
            bounce: 0.2,
            duration: 0.8,
          },
        },
      }}
    >
      {children}
    </HeaderTitle>
  );
}
