import { FormInputObject, FormValues } from "../types/form.types";
import { validateInputField } from "../validate/validate_input_field";

export const useGetErrors = (formDataArray: Array<FormInputObject>, input:FormValues)=> {

	function getErrors() {
		return formDataArray.reduce((acc: FormValues, dataObject: FormInputObject) => {
			const messageString = getErrorMessage(dataObject.title, 
				dataObject.regex, input[dataObject.role], 
				dataObject.errorMessage);
				return {...acc, [dataObject.role]: messageString}; 
			}, {});
	}
	
		function getErrorMessage(title:string, regex:Array<RegExp>, 
			inputValue: string, errorMessage: Array<string>) {
			return validateInputField(title, regex, inputValue, errorMessage);
		}

	return getErrors();
	
};

export default useGetErrors;