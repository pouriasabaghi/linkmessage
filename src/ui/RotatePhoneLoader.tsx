import { useEffect, useState } from "react";
import rotate from "./../assets/rotate.webp";

type RotatePhoneLoaderProps = {
  onClick: () => void;
  isDesktop: string | boolean;
};

function RotatePhoneLoader({ onClick, isDesktop }: RotatePhoneLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  function handleClick() {
    onClick();
    setIsLoading(false);
  }

  return (
    <div
      data-state={isLoading}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-all data-[state=true]:visible data-[state=false]:invisible data-[state=false]:opacity-0 data-[state=true]:opacity-100"
    >
      {!ready && (
        <p className="mb-5 text-center text-4xl font-bold">
          {isDesktop ? "Your message is preparing..." : "Please rotate your phone"}
        </p>
      )}
      {isLoading && (
        <div
          className={`${isDesktop ? "" : "rotate-90"} flex flex-col justify-center`}
        >
          <button
            data-ready={ready}
            className={`invisible transform rounded-lg border-2 border-yellow-300 p-5 text-5xl font-bold opacity-0 transition-all data-[ready=true]:visible data-[ready=true]:opacity-100`}
            onClick={handleClick}
          >
            See Message
          </button>
        </div>
      )}
    </div>
  );
}

export default RotatePhoneLoader;
