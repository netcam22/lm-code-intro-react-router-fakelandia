import { useContext } from "react";
import { MisdemeanourFilterContext } from "../components/misdemeanours/misdemeanour-container";
import { MisdemeanourContext } from "../components/misdemeanours/misdemeanour-wrapper";

export const useMisdemeanourContext = () => {
  const contextValue = useContext(MisdemeanourContext);
  return contextValue;
};

export const useMisdemeanourFilterContext = () => {
  const contextValue = useContext(MisdemeanourFilterContext);
  return contextValue;
};