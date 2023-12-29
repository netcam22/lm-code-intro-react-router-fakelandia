import { MISDEMEANOURS } from "../../types/misdemeanours.types";
export const MISDEMEANOUR_FORM_OPTONS = ["", ...MISDEMEANOURS, "I just want to talk"];
export type MisdemeanourFormKind = (typeof MISDEMEANOUR_FORM_OPTONS)[number];
import {FormInputObject, FormSelectInputObject, FormTextAreaInputObject} 
from "../../types/form.types";

export type InitialValue = {[key: string]: string};

export const formTextInput: Array<FormInputObject> = [
    {
    id: "input-1",
    title: "Subject",
    role: "subject",
    regex: [/^.{2,20}$/gi, /^[a-z]+$/gi],
    errorMessage: ["must be between 2 and 20 characters", "no spaces, numbers or special characters allowed"]
    }
];

export const formSelectInput: Array<FormSelectInputObject> = [
    {
    id: "input-2",
    title: "Reason for contact",
    role: "reason",
    regex: [/^I just want to talk{1}|rudeness{1}|vegetables{1}|lift{1}|united{1}$/],
    errorMessage: ['error: invalid selection'],
    options: [...MISDEMEANOUR_FORM_OPTONS]
    }
];

export const formTextAreaInput: Array<FormTextAreaInputObject> = [
    {
    id: "input-3",
    title: "Your Confession",
    role: "confession",
    regex: [/^.{10,500}$/gi],
    errorMessage: ["must be between 10 and 500 characters"],
    size: {rows: 8, cols: 10}
    }
];

export const formDataArray = [...formTextInput, ...formSelectInput, ...formTextAreaInput];
export const initialValues: InitialValue = 
formDataArray.reduce((acc, field) => {return {...acc, [field.role]: ""}}, {});