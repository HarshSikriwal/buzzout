import Image from "next/image";
import React from "react";
import AskMe from "../public/assets/askme.png";
import { FaQuestion } from "react-icons/fa";

const FrontAma = ({ setIsFlipped }: any) => {
  return (
    <div className="absolute backface-hidden rounded-2xl bg-[#7E22CE]/60 h-[250px] py-6 px-4 flex justify-between items-center">
      <Image src={AskMe} alt="Mind Blown" className="w-1/2 h-full" />
      <div className="flex flex-col h-full  items-center justify-center gap-8 grow">
        <p className="text-3xl text-center">
          Ask Me
          <br />
          Antyhing
        </p>
      </div>
    </div>
  );
};

export default FrontAma;
