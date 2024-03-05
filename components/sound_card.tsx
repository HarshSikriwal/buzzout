import { getSound } from "@/_actions/getSound";
import SoundGenerator from "./SoundGenerator";
import Image from "next/image";
import Frankenstein from "../public/assets/Frankenstein.png";

const SoundCard = async () => {
  const soundFiles = await getSound();

  return (
    <div className="rounded-2xl bg-[#7E22CE]/60 py-6 px-4 h-[250px] flex justify-between items-center">
      <Image src={Frankenstein} alt="Mind Blown" className="w-fit h-full" />
      <div className="flex flex-col items-center gap-4 grow">
        <p className="text-3xl">Just Play</p>
        {soundFiles && <SoundGenerator soundFiles={soundFiles} />}
      </div>
    </div>
  );
};

export default SoundCard;
