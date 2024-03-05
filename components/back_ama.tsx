import { inter } from "@/utils/fonts";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { IoCloseCircleOutline } from "react-icons/io5";

const BackAma = ({ setIsFlipped }: any) => {
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const res = await fetch("../api/openai", {
      method: "POST",
      body: question,
    });
    const data = await res.json();
    setLoading(false);
    setMessage(data);
  };
  return (
    <div
      className={`${inter.className} absolute my-rotate-y-180 backface-hidden w-full rounded-2xl h-[250px] bg-[#E8EC08]/90 py-6 px-4 flex flex-col gap-4 justify-between items-center`}
    >
      <CgClose
        className="absolute right-2 top-2"
        onClick={() => setIsFlipped(false)}
      />
      <div className="flex justify-between w-full  items-center gap-2">
        <div className="grow relative flex items-center">
          <input
            className="rounded-md w-full pr-8 py-2 pl-2"
            placeholder="Ask me anything..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            className="absolute right-2 rounded-full hover:scale-105 active:scale-95"
            onClick={() => {
              setQuestion("");
              setMessage("");
            }}
          >
            <IoCloseCircleOutline className="text-lg" />
          </button>
        </div>

        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="bg-[#7E22CE]/70 rounded-md p-2 hover:scale-105 active:scale-95 placeholder:text-sm"
        >
          Submit
        </button>
      </div>
      <div className="bg-white h-full w-full rounded-md overflow-y-scroll p-2">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p className="text-[16px] leading-6">{message}</p>
        )}
      </div>
    </div>
  );
};

export default BackAma;
