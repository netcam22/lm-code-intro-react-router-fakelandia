import { validateInput } from "./validate_input";

export function validateInputField(title:string, regex: Array<RegExp>, value: string, 
    message: Array<string>) {
    const errorMessage  = validateInput(title, regex, value, message)
            .reduce((acc: string, message: string) => acc+"; "+message, "")
            .replace("; ", "");
    return errorMessage;
}