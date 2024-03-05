import type { ReactNode } from "react";

import { cn } from "@/utils/functions";

export function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto h-full w-full px-4 md:px-20", className)}>
      {children}
    </div>
  );
}
