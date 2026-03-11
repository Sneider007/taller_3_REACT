import { useState } from "react";

// 🔥 Custom Hook sencillo
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  return [value, toggle];
};