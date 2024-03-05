"use client";
import { useState, useRef } from "react";
// import { BsFillPlayCircleFill } from "react-icons/bs";
import { MdReplay, MdPlayArrow } from "react-icons/md";

const SoundGenerator = ({ soundFiles }: { soundFiles: string[] }) => {
  const [randomSound, setRandomSound] = useState(
    soundFiles[Math.floor(Math.random() * soundFiles.length)]
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  function togglePlay() {
    if (!isPlaying) {
      audioRef?.current?.play().then(() => {
        setIsPlaying(true);
      });
      // setIsPlaying(true);
    } else {
      audioRef?.current?.pause();
      setRandomSound(soundFiles[Math.floor(Math.random() * soundFiles.length)]);
      setIsPlaying(false);
    }
  }

  return (
    <div>
      <audio ref={audioRef} src={randomSound}></audio>
      <button
        onClick={togglePlay}
        className={`hover:scale-105 addshadow flex bg-yellow-400 active:scale-95 rounded-full p-2 justify-center items-center`}
      >
        {isPlaying ? (
          <MdReplay className="text-3xl" />
        ) : (
          <MdPlayArrow className="text-3xl" />
        )}
      </button>
    </div>
  );
};

export default SoundGenerator;
