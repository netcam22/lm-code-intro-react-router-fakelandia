import { Misdemeanour } from "../../types/misdemeanours.types";

export type MisdemeanourArray  = Array<Misdemeanour>;

export type MisdemeanourHeading = string;

export type MisdemeanourHeadings  = Array<MisdemeanourHeading>;

export const MISDEMEANOUR_DATA_HEADINGS : 
MisdemeanourHeadings  = ["Citizen Id", "Date", "Misdemeanour", "Punishment Idea"] as const;