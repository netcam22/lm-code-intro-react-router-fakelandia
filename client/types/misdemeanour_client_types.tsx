import { Misdemeanour} from "./misdemeanours.types";
export interface MisdemeanourObject extends Misdemeanour {
    indexValue: string,
}
export type MisdemeanourHeading = string;

export type MisdemeanourHeadings  = Array<MisdemeanourHeading>;

export const MISDEMEANOUR_DATA_HEADINGS : 
MisdemeanourHeadings  = ["Citizen Id", "Date", "Misdemeanour", "Punishment Idea"] as const;

export type MisdemeanourView = {[key: string]: {icon: string, desc: string}};

export const MISDEMEANOUR_VIEWS: MisdemeanourView = {
	rudeness: {icon: "🤪", desc: "Mild Public Rudeness"},
	vegetables:  {icon: "🥗", desc: "Not Eating Your Vegetables"},
	lift: {icon: "🗣", desc: "Speaking in a Lift"},
	united:  {icon: "😈", desc: "Supporting Manchester United"}
 } as const;