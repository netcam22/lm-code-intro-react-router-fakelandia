import { useState, ChangeEvent, MouseEvent} from 'react';
import W12MHeader from './confession_form_header';
import {TextInput} from './text_input';
import { SelectInput } from './select-input';
import { TextAreaInput } from './text_area_input';
import { SubmitButton } from './submit_button';
import { formTextInput, formSelectInput, formTextAreaInput, formDataArray, initialValues} 
from "./../../data/confession_form_data";
import {FormInputObject, FormSelectInputObject, FormTextAreaInputObject} 
from '../../../types/form.types';
import { validateInput } from "./../../validate/validate_input";
export interface InputProps {
	title: string;
	role: string;
	value: string;
	errorMessage: string;
	submitted: boolean;
}

const ConfessionForm = () => {
	
	const [input, setInput] = useState({...initialValues});
	const [errors, setErrors] = useState({...initialValues});
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
		if (!submitted) {
			saveAllErrors();
			setSubmitted(true);
		}		
	}


	function setInputError(dataRole: string, errorString: string) {
		setErrors((currentErrors) =>
				Object.assign({}, currentErrors, {
					[dataRole]: errorString,
				})
		)
	}

	function saveInputErrors(dataRole: string, inputValue:string) {
		const dataObject = formDataArray.find((dataObject: FormInputObject) =>
		dataObject.role === dataRole);
		if (dataObject) {
			const errorString = validateInputField(dataObject.title, 
				dataObject.regex, inputValue, dataObject.errorMessage);
			setInputError(dataRole, errorString);
		}
	}

	function saveAllErrors() {
		formDataArray.forEach((dataObject: FormInputObject) => {
			const errorString = validateInputField(dataObject.title, 
				dataObject.regex, input[dataObject.role], dataObject.errorMessage);
				setInputError(dataObject.role, errorString);
		});
	}

	function handleChange(event: ChangeEvent<HTMLInputElement> | 
		ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) {
		event.preventDefault();
		setInput((currentData) =>
			Object.assign({}, currentData, {
				[event.target.id]: event.target.value,
			})
		)
		saveInputErrors(event.target.id, event.target.value);
	}

	function validateInputField(title:string, regex: Array<RegExp>, value: string, 
		message: Array<string>) {
		const errorMessage  = validateInput(title, regex, value, message)
				.reduce((acc: string, message: string) => acc+"; "+message, "")
				.replace("; ", "");
		return errorMessage;
	}

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<div className = "col-50-left">

			{formTextInput.map((field: FormInputObject, i: number) => 

			<TextInput 
				key = {field.id}
				title = {field.title} 
				errorMessage = {errors[field.role]}
				value={input[field.role]} 
				onChange={handleChange} 
				submitted={submitted}
				role = {field.role} 
			/>)
			}

			{formSelectInput.map((field: FormSelectInputObject, i: number) => 

				<SelectInput
				key = {field.id}
				title = {field.title} 
				errorMessage = {errors[field.role]}
				value={input[field.role]} 
				onChange={handleChange} 
				submitted={submitted} 
				role = {field.role} 
				options = {field.options}
				/>)
			}

			{formTextAreaInput.map((field: FormTextAreaInputObject, i: number) => 

			<TextAreaInput 
				key = {formSelectInput[i].id}
				title = {formTextAreaInput[i].title} 
				errorMessage = {errors[formTextAreaInput[i].role]}
				value={input[formTextAreaInput[i].role]} 
				onChange={handleChange} 
				submitted={submitted} 
				role = {formTextAreaInput[i].role} 
				size = {formTextAreaInput[i].size}
			/>)
			}

			<SubmitButton 
			buttonText = "Submit Application" 
			id="submitAlienDataButton" 
			role="submitButton"
			submitted={submitted}
			onSubmitHandler = {handleSubmit}
			errorMessages = {errors}
			/>
			</div>

		</section>	
	);
};
export default ConfessionForm;
