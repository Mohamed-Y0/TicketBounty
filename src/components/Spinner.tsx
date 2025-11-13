import { LucideLoaderCircle } from "lucide-react";

function Spinner() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <LucideLoaderCircle className="h-16 w-16 animate-spin" />
    </div>
  );
}

export default Spinner;
