import { createContext, useState } from "react";
import { letterItems } from "shared/letterItems";

export const LetterContext = createContext();

const LetterProvider = ({ children }) => {
  const [letterAdd, setLetterAdd] = useState(letterItems);
  return (
    <LetterContext.Provider value={{ letterAdd, setLetterAdd }}>
      {children}
    </LetterContext.Provider>
  );
};

export default LetterProvider;
