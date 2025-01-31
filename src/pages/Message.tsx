import { useEffect, useRef, useState } from "react";
import RotatePhoneLoader from "../ui/RotatePhoneLoader";
import { useMessage } from "@/features/messages/useMessage";
import { useParams } from "react-router-dom";

function Message() {
  const { link } = useParams();

  const { message, isLoading } = useMessage({ link: link as string });

  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [words, setWords] = useState<string[]>([]);
  const [desktop, setDesktop] = useState<string | boolean>(
    () => window.matchMedia("(min-width:1280px)").matches,
  );

  useEffect(() => {
    const wordsTemp = message?.message?.split(" ");
    setWords(wordsTemp);
  }, [isLoading]);

  useEffect(() => {
    if (marqueeRef.current && words.length) {
      // cause div.marquee has been rotated 90deg now width is height :)
      const width = marqueeRef.current.getBoundingClientRect().height;
      setMarqueeWidth(width);
    }
  }, [words]);

  function handleShowingMessage() {
    marqueeRef.current?.classList.add("active");

    if (window.matchMedia("(min-width:1280px)").matches) {
      setDesktop("yes");
    }
  }

  if (isLoading || !words) return <p>Loading...</p>;

  return (
    <>
      <RotatePhoneLoader isDesktop={desktop} onClick={handleShowingMessage} />
      <div
        className={`${marqueeWidth ? "w-full" : ""} fixed right-0 top-0 h-full overflow-hidden bg-black ${desktop === "yes" ? "-rotate-90" : ""}`}
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
