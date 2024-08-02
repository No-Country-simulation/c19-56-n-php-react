import { useState, useEffect, useRef } from "react";

interface Props {
  inputValue: string | undefined;
  delay?: number;
}

export const useDebounce = ({ inputValue, delay = 1500 }: Props) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue ?? '');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setDebouncedValue(inputValue ?? '');
    }, delay);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [inputValue, delay]);

  return debouncedValue;
};