import { useContext } from "react";
import { MisdemeanourContext } from "../components/misdemeanours/misdemeanour-container";

export const useMisdemeanourContext = () => {
  const contextValue = useContext(MisdemeanourContext);
  return contextValue;
};