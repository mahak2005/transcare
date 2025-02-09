import { cn } from "@/lib/utils";
import { LabelHTMLAttributes } from "react";

// interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  customProp?: string;
}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label className={cn("block text-sm font-medium text-gray-700", className)} {...props} />
  );
}
