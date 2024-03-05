import SoundCard from "@/components/sound_card";
import { MaxWidthWrapper } from "../components/max_width_wrapper";
import AMA from "@/components/AMA";

export default function Home() {
  return (
    <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-16 ">
      <SoundCard />
      <AMA />
    </MaxWidthWrapper>
  );
}
