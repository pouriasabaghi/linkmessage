import { useEffect, useState } from "react";
import rotate from "./../assets/rotate.webp";

type RotatePhoneLoaderProps = {
  onClick: () => void;
};

function RotatePhoneLoader({ onClick }: RotatePhoneLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 4000);

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
      {isLoading && (
        <button
          data-ready={ready}
          className="invisible rotate-90 transform rounded-lg border-2 border-yellow-300 p-5 text-5xl font-bold opacity-0 transition-all data-[ready=true]:visible data-[ready=true]:opacity-100"
          onClick={handleClick}
        >
          See Message
        </button>
      )}

      {!ready && <img src={rotate} alt="rotate your phone" />}
    </div>
  );
}

export default RotatePhoneLoader;
