import { inter } from "@/utils/fonts";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { IoCloseCircleOutline } from "react-icons/io5";
import BounceLoader from "react-spinners/BounceLoader";

const BackAma = ({ setIsFlipped }: any) => {
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (question.length > 0) {
      const res = await fetch("../api/openai", {
        method: "POST",
        body: question,
      });
      const data = await res.json();
      setLoading(false);
      setMessage(data);
    }
    setLoading(false);
  };
  return (
    <div
      className={`${inter.className} absolute my-rotate-y-180 backface-hidden w-full rounded-2xl h-[250px] bg-[#E8EC08]/90 pt-7 pb-2 px-4 flex flex-col gap-2 justify-between items-center`}
    >
      <CgClose
        className="absolute right-2 top-2 text-lg font-semibold hover:scale-105 active:scale-95"
        onClick={() => setIsFlipped(false)}
      />
      <form
        onSubmit={handleSubmit}
        className="flex justify-between w-full  items-center gap-2"
      >
        <div className="grow relative flex items-center">
          <input
            className="rounded-md w-full pr-8 py-2 pl-2"
            placeholder="Ask me anything..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <div
            className="absolute right-2 rounded-full hover:scale-105 active:scale-95"
            onClick={() => {
              setQuestion("");
              setMessage("");
            }}
          >
            <IoCloseCircleOutline className="text-lg" />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#7E22CE]/80 text-white rounded-md p-2 hover:scale-105 active:scale-95 placeholder:text-sm"
        >
          Submit
        </button>
      </form>
      <div className="bg-white h-full w-full rounded-md overflow-y-scroll p-2">
        {loading ? (
          <BounceLoader color="#36d7b7" size={16} />
        ) : (
          <p className="text-[16px] leading-6">{message}</p>
        )}
      </div>
    </div>
  );
};

export default BackAma;
