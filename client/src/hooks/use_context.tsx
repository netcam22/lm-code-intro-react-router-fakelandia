import { useContext } from "react";
import { MisdemeanourContext, MisdemeanourFilterContext } from "../components/misdemeanours/misdemeanour-container";

export const useMisdemeanourContext = () => {
  const contextValue = useContext(MisdemeanourContext);
  return contextValue;
};

export const useMisdemeanourFilterContext = () => {
  const contextValue = useContext(MisdemeanourFilterContext);
  return contextValue;
};