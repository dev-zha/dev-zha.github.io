const Path = (props: any) => (
  <path strokeWidth="3" strokeLinecap="round" {...props} />
);

export default function MobileMenuToggle({ toggle }: any) {
  return (
    <button
      onClick={toggle}
      className="fixed top-2 right-2 p-2 rounded-full"
    >
      <svg
        className="w-6 h-6 stroke-primary-500"
        width="23"
        height="18"
        viewBox="0 0 23 18"
      >
        <Path
          d="M 2 2.5 L 20 2.5"
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
          className="top"
        />
        <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
        <Path
          d="M 2 16.346 L 20 16.346"
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
          className="bottom"
        />
      </svg>
    </button>
  );
}
