import { useEffect, useRef } from "react";
import { Genders } from "../constants/genders";

export const usePrevious = (value: any) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current ?? Genders.None;
};
