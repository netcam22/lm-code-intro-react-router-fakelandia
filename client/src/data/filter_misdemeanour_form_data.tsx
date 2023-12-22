import { MISDEMEANOURS } from "../../types/misdemeanours.types";

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
    regex: [/^MISDEMEANOURS[0]{1}$/, /^MISDEMEANOURS[1]{1}$/,
    /^MISDEMEANOURS[2]{1}$/, /^MISDEMEANOURS[3]{1}$/],
    errorMessage: ['error: invalid selection'],
    options: ["all", ...MISDEMEANOURS]
    }
];

export const initialValues: InitialValue = formSelectInput.reduce((acc, field) => {return {...acc, [field.role]: ""}}, {});