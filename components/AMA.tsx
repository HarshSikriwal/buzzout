"use client";

import { useState } from "react";
import BackAma from "./back_ama";
import FrontAma from "./front_ama";
import { cn } from "@/utils/functions";

const AMA = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className=" bg-transparent cursor-pointer group perspective">
      <div
        className={cn(
          "relative preserve-3d  w-full h-full duration-1000",
          isFlipped && "my-rotate-y-180"
        )}
      >
        <FrontAma setIsFlipped={setIsFlipped} />
        <BackAma setIsFlipped={setIsFlipped} />
      </div>
    </div>
  );
};

export default AMA;
