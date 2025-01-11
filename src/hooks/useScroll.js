import { useEffect, useState } from "react";

function useScroll() {
  const [complete, setComplete] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollPage = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setComplete(Number((scrollPage / scrollHeight).toFixed(2)) * 100);
      }
    };
    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);
  return complete;
}

export default useScroll;
