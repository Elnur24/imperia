interface SeparatorProps {
  label: string;
}

export default function Separator({ label }: SeparatorProps) {
  return (
    <div className="w-full relative my-16 md:my-28 select-none pointer-events-none">
      <div className="separator-line" />
      <div className="separator-ornament font-classic font-semibold tracking-[0.4em] text-xs">
        {label}
      </div>
    </div>
  );
}
