"use client";

import IndiaMap from "@/components/Map";
import TypingAnimation from "@/components/ui/typing-animation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const herotext = [
  { "language": "English", "script": "Sanskriti" },
  { "language": "Hindi", "script": "संस्कृति" },
  { "language": "Kannada", "script": "ಸಂಸ್ಕೃತಿ" },
  { "language": "Bengali", "script": "সংস্কৃতি" },
  { "language": "Gujarati", "script": "સંસ્કૃતિ" },
  { "language": "Odia", "script": "ସଂସ୍କୃତି" }
];


export default function Home() {
  const router = useRouter();
  const [currentText, setCurrentText] = useState(herotext[0].script); // Initialize with the first text
  useEffect(() => {
    const interval = setInterval(() => {
      // Get the next text in the array
      const nextIndex = (herotext.findIndex(item => item.script === currentText) + 1) % herotext.length;
      setCurrentText(herotext[nextIndex].script);
    }, 6000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentText]);

  return (
    <div className="ml-16 flex flex-row px-16 pt-12 w-fit overflow-hidden min-h-screen">
      <div className="flex flex-col justify-center h-[550px] items-start w-1/3 ml-36 mt-24">
      <TypingAnimation
          key={currentText} 
          className="text-8xl font-bold text-[#4d1414]"
          text={currentText}
        />
        <div className="text-xl my-8">
          Welcome to Sanskriti - A dynamic platform designed to explore and immerse yourself in the diverse cultures and vibrant festivals of India. With <span className="text-[#4d1414] font-semibold">interactive maps, immersive timelines, engaging video content, and exciting games</span>, this platform offers a rich, multimedia experience to discover the traditions, customs, and celebrations that make India unique
        </div>
        <button onClick={()=>router.push('/login')} className="bg-[#4d1414]  text-yellow-300 font-semibold px-4 py-2 rounded-xl hover:scale-105 transition-all duration-300">
          Login
        </button>
      </div>
      <div className="w-7/12 overflow-hidden h-[80vh]">
        <IndiaMap/>
      </div>
    </div>
  );
}