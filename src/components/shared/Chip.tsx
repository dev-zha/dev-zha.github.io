interface ChipProps {
  children: string;
}

export default function Chip({ children }: ChipProps) {
  return (
    <span className="inline-block bg-gray-100/10 text-xs font-medium text-gray-400 border border-gray-400 rounded-2xl px-2.5 py-0.5">
      {children}
    </span>
  );
}
