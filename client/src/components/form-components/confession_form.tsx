import { useState, ChangeEvent, MouseEvent} from 'react';
import ConfessionFormHeader from './confession_form_header';
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
	attempted: boolean;
}

const ConfessionForm = () => {
	
	const [input, setInput] = useState({...initialValues});
	const [errors, setErrors] = useState({...initialValues});
	const [attempted, setAttempted] = useState(false);
 
	async function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		if (!attempted) {
			saveAllErrors();
			setAttempted(true);
		}
		if (attempted || formHasNoErrors()) {
		try {
			const response = await fetch("http://localhost:8080/api/confess", {
			method: "POST", 
			headers: {
				"Content-Type": "application/json",
			}, 
			body : JSON.stringify({
				subject :input.subject, 
				reason: input.reason, 
				details: input.details
			}),
			});
			if (response.ok) {
			const formData = await response.json();
			console.log(response, formData);
				//setData((data: Array<MisdemeanourObject>) => [...data, formData]);
			}  
		} 
		catch (error) {
			console.log(error)
		}
	}
	}

	function formHasNoErrors() {
		return Object.values(errors).reduce((acc, error) => acc+error, "") === "";
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
		<section className='form'>
			<ConfessionFormHeader />
			<div className = "col-80-centre">

			{formTextInput.map((field: FormInputObject) => 

			<TextInput 
				key = {field.id}
				title = {field.title} 
				errorMessage = {errors[field.role]}
				value={input[field.role]} 
				onChange={handleChange} 
				attempted={attempted}
				role = {field.role} 
			/>)
			}

			{formSelectInput.map((field: FormSelectInputObject) => 

				<SelectInput
				key = {field.id}
				title = {field.title} 
				errorMessage = {errors[field.role]}
				value={input[field.role]} 
				onChange={handleChange} 
				attempted={attempted} 
				role = {field.role} 
				options = {field.options}
				optionValues = {field.optionValues}
				/>)
			}

			{formTextAreaInput.map((field: FormTextAreaInputObject) => 

			<TextAreaInput 
				key = {field.id}
				title = {field.title} 
				errorMessage = {errors[field.role]}
				value={input[field.role]} 
				onChange={handleChange} 
				attempted={attempted} 
				role = {field.role} 
				size = {field.size}
			/>)
			}

			<SubmitButton 
			buttonText = "Confess" 
			id="submitConfessionButton" 
			role="submitButton"
			attempted={attempted}
			onSubmitHandler = {handleSubmit}
			errorMessages = {errors}
			/>
			</div>

		</section>	
	);
};
export default ConfessionForm;
