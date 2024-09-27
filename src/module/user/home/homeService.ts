"use client";
import { useState } from "react";

// Extend the Window interface to include SpeechRecognition types
// interface Window {
//   webkitSpeechRecognition: typeof SpeechRecognition;
//   SpeechRecognition: typeof SpeechRecognition;
// }

const useHomeService = () => {
  const [text, setText] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);

  // Return the state and function so they can be used in a component
  return {
    text,
    isListening,
  };
};

export default useHomeService;
