import React, { useState, useEffect } from "react";



export default function TypingEffect() {
const texts = ["A Front-End Developer", "based in Indonesia"];
  const [displayText, setDisplayText] = useState(["", ""]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;

    const currentLine = texts[lineIndex];
    const currentText = displayText.slice();

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        currentText[lineIndex] = currentLine.substring(0, charIndex + 1);
        
        setDisplayText(currentText);
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentLine.length) {
          if (lineIndex === texts.length - 1) {
            // selesai mengetik semua baris
            setTimeout(() => setIsDeleting(true), 1500);
          } else {
            setLineIndex(lineIndex + 1);
            setCharIndex(0);
          }
        }
      } else {
        if (charIndex > 0) {
          currentText[lineIndex] = currentLine.substring(0, charIndex - 1);
          setDisplayText(currentText);
          setCharIndex(charIndex - 1);
        } else {
          if (lineIndex === 0) {
            setIsDeleting(false);
          } else {
            setLineIndex(lineIndex - 1);
            setCharIndex(texts[lineIndex - 1].length);
          }
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, isDeleting]);


  return (
    <div>
       <h2 className="text-2xl md:text-3xl font-semibold">
              {displayText[0]}
              {lineIndex === 0 && <span className="animate-pulse">|</span>}
            </h2>
            <h2 className="text-2xl md:text-3xl font-semibold">
              {displayText[1]}
              {lineIndex === 1 && <span className="animate-pulse">|</span>}
            </h2>
    </div>
  );
}
