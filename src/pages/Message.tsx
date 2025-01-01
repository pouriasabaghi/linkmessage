import { useEffect, useRef, useState } from "react";
import RotatePhoneLoader from "../ui/RotatePhoneLoader";

function Message() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [words, setWords] = useState<string[]>([]);
  useEffect(() => {
    function fetchData() {
      const message =
        "The  or JSX The  or JSXThe  or JSXThe  or JSXThe  or JSXThe  or JSXThe  or JSXThe  or JSX";

      const wordsTemp = message.split(" ");
      setWords(wordsTemp);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (marqueeRef.current && words.length) {
      // cause div.marquee has been rotated 90deg now width is height :)
      const width = marqueeRef.current.getBoundingClientRect().height;
      setMarqueeWidth(width);
    }
  }, [words]);

  return (
    <>
    <RotatePhoneLoader onClick={() => marqueeRef.current?.classList.add('active') } />
    <div
      className={`${marqueeWidth ? "w-full" : ""} fixed right-0 top-0 h-full overflow-hidden bg-black`}
    >
      <div
        ref={marqueeRef}
        className="marquee"
        style={{
          ["--marquee-width" as string]: `${marqueeWidth}px`,
          ["--marquee-duration" as string]: `${marqueeWidth ? Math.round(marqueeWidth / 5000) * 15 : 10}s`,
        }}
      >
        {words.map((word, index) => (
          <span key={index} className="word">
            {word}
            &nbsp;
          </span>
        ))}
      </div>
    </div>
      </>
  );
}

export default Message;
