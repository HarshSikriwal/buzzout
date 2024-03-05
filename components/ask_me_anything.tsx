"use client";
import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import QuestionModal from "./QuestionModal";

const AskMeAnything = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="hover:scale-105 addshadow flex bg-yellow-400 active:scale-95 rounded-full p-2 justify-center items-center">
      <FaQuestion className="text-3xl" onClick={() => setOpen(true)} />
      {open && (
        <div className="absolute left-0">
          <QuestionModal />
        </div>
      )}
    </div>
  );
};

export default AskMeAnything;
