import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";
export const getSound = async () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
  const { data: sounds, error } = await supabase.storage
    .from("random-sounds")
    .list();

  if (!sounds || error) notFound();
  //   let randomSound = data[Math.floor(Math.random() * data.length)];
  const FetchSound = (name: string) => {
    let soundData = supabase.storage.from("random-sounds").getPublicUrl(name);
    if (soundData) {
      return soundData.data.publicUrl;
    }
  };
  let soundFiles: string[] | undefined = [];
  for (let d of sounds) {
    let sound = FetchSound(d.name);
    if (!sound) return;
    soundFiles.push(sound);
  }
  return soundFiles;
};
