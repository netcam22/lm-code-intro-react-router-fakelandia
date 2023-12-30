import { Misdemeanour} from "./misdemeanours.types";
export interface MisdemeanourObject extends Misdemeanour {
    indexValue: string,
}
export type MisdemeanourHeading = string;

export type MisdemeanourHeadings  = Array<MisdemeanourHeading>;

export const MISDEMEANOUR_DATA_HEADINGS : 
MisdemeanourHeadings  = ["Citizen Id", "Date", "Misdemeanour", "Punishment Idea"] as const;

export const MISDEMEANOUR_VIEWS = {
	rudeness: {icon: "🤪", desc: "Mild Public Rudeness"},
	vegetables:  {icon: "🥗", desc: "Not Eating Your Vegetables"},
	lift: {icon: "🗣", desc: "Speaking in a Lift"},
	united:  {icon: "😈", desc: "Supporting Manchester United"}
 } as const;

 export type MisdemeanourViews = typeof MISDEMEANOUR_VIEWS;