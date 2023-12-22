import { MISDEMEANOURS } from "../../types/misdemeanours.types";
export const MISDEMEANOUR_FILTERS = ["any", ...MISDEMEANOURS]
export type MisdemeanourFilterKind = (typeof MISDEMEANOUR_FILTERS)[number];

export interface FormInputObject {
	id: string;
    title: string;
    role: string;
    regex: Array<RegExp>;
    errorMessage: Array<string>;
}
export interface FormSelectInputObject extends FormInputObject {
    options: Array<string>
}

export type InitialValue = {[key: string]: string};

export const formSelectInput: Array<FormSelectInputObject> = [
    {
    id: "filter-misdemeanours",
    title: "Filter",
    role: "filterMisdemeanours",
    regex: [/^all{1}|rudeness{1}|vegetables{1}|lift{1}|united{1}$/],
    errorMessage: ['error: invalid selection'],
    options: [...MISDEMEANOUR_FILTERS]
    }
];

export const initialValues: InitialValue = formSelectInput.reduce((acc, field) => {return {...acc, [field.role]: ""}}, {});