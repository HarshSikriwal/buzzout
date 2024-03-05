"use client";

import { useState } from "react";
import BackAma from "./back_ama";
import FrontAma from "./front_ama";

const AMA = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className=" bg-transparent cursor-pointer group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <FrontAma />
        <BackAma />
      </div>
    </div>
  );
};

export default AMA;
