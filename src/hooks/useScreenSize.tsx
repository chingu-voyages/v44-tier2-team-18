import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [browserInnerWidthSize, setBrowserInnerWidthSize] = useState<number>(0);

  useEffect(() => {
    onResize();
    setBrowserInnerWidthSize(window.innerWidth);
  }, []);

  const onResize = () => {
    window.addEventListener("resize", function () {
      setBrowserInnerWidthSize(window.innerWidth);
    });
  };
  return { browserInnerWidthSize };
};

export default useScreenSize;
