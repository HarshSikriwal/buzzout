import Image from "next/image";
import React from "react";
import AskMe from "../public/assets/askme.png";
import { FaQuestion } from "react-icons/fa";

const FrontAma = ({ setIsFlipped }: any) => {
  return (
    <div className="absolute backface-hidden rounded-2xl bg-[#7E22CE]/60 h-[250px] py-6 px-4 flex justify-between items-center">
      <Image src={AskMe} alt="Mind Blown" className="w-1/2 h-full" />
      <div className="flex flex-col h-full w-full items-center justify-center gap-4 grow">
        <p className="text-3xl text-center">
          Ask Me
          <br />
          Antyhing
        </p>
        <button
          className="flex add_shadow items-center justify-center font-bold text-4xl bg-[#E8EC08]/90 hover:scale-105 active:scale-95 rounded-full h-[56px] w-[56px]"
          onClick={() => setIsFlipped(true)}
        >
          ?
        </button>
      </div>
    </div>
  );
};

export default FrontAma;
