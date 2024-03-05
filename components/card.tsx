import Image from "next/image";
import React from "react";
const Card = ({
  image,
  title,
  component,
}: {
  image: any;
  title: string;
  component: any;
}) => {
  return (
    <div className="rounded-2xl bg-[#7E22CE]/60 py-6 px-4 flex justify-between items-center">
      <Image src={image} alt="Mind Blown" className="w-fit h-full" />
      <div className="flex flex-col items-center gap-4 grow">
        <p className="text-3xl">{title}</p>
        {component}
      </div>
    </div>
  );
};

export default Card;
