import { Misdemeanour} from "./misdemeanours.types";
export interface MisdemeanourObject extends Misdemeanour {
    indexValue: string,
}
export type MisdemeanourHeading = string;

export type MisdemeanourHeadings  = Array<MisdemeanourHeading>;

export const MISDEMEANOUR_DATA_HEADINGS : 
MisdemeanourHeadings  = ["Citizen Id", "Date", "Misdemeanour", "Punishment Idea"] as const;