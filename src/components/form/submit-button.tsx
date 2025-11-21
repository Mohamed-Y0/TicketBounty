"use client";

import { LucideLoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  label?: string;
  icon?: React.ReactElement;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

const SubmitButton = ({
  label,
  icon,
  variant = "default",
  size = "default",
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      variant={variant}
      size={size}
      className="capitalize"
    >
      {label}
      {pending && <LucideLoaderCircle className="h-4 w-4 animate-spin" />}
      {pending || icon}
    </Button>
  );
};

export default SubmitButton;
