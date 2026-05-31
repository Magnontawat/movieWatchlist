import { useEffect } from "react";

export const useFetchSearch = (textInput) => {
  useEffect(() => {
    const timer = setTimeout(() => {
        console.log(textInput)
    }, 2000);
    return () => clearTimeout(timer);
  }, [textInput]);
};
