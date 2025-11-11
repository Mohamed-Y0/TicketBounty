import { LucideMessageSquareWarning } from "lucide-react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  button?: React.ReactNode;
};

const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning className="h-16 w-16" />,
  button = <div className="h-10" />,
}: PlaceholderProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-2 self-center">
      {icon}
      <h2 className="text-center text-lg">{label}</h2>
      {button}
    </div>
  );
};

export default Placeholder;
