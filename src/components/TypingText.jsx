import React, { useState, useEffect } from "react";

const TypingText = ({ text, speed = 100, pause = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index - 1));
        setIndex(index - 1);
      }, speed / 2);
    } else {
      timeout = setTimeout(() => setIsDeleting(!isDeleting), pause);
    }
    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, pause]);

  return (
    <p className="text-xl sm:text-2xl md:text-3xl max-w-2xl mx-auto text-center text-white">
      {displayedText}
      <span className="ml-1 animate-blink">|</span>
    </p>
  );
};

export default TypingText;
