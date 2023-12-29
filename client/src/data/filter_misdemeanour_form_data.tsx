import { MISDEMEANOURS } from "../../types/misdemeanours.types";
export const MISDEMEANOUR_FILTERS = ["all", ...MISDEMEANOURS];
export type MisdemeanourFilterKind = (typeof MISDEMEANOUR_FILTERS)[number];
import {FormSelectInputObject} 
from "../../types/form.types";

export type InitialValue = {[key: string]: MisdemeanourFilterKind};

export const formSelectInput: Array<FormSelectInputObject> = [
    {
    id: "filter-misdemeanours",
    title: "Filter",
    role: "filterMisdemeanours",
    regex: [/^all{1}|rudeness{1}|vegetables{1}|lift{1}|united{1}$/],
    errorMessage: ['error: invalid selection'],
    options: [...MISDEMEANOUR_FILTERS],
    optionValues: [...MISDEMEANOUR_FILTERS]
    }
];

export const initialValues: InitialValue = formSelectInput.reduce((acc, field) => {return {...acc, [field.role]: "all"}}, {});
export const errorValues: InitialValue = formSelectInput.reduce((acc, field) => {return {...acc, [field.role]: ""}}, {});