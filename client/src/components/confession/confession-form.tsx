import { useState, ChangeEvent, FormEvent} from 'react';
import FormHeader from '../form-components/form-header';
import {TextInput} from '../form-components/text-input';
import { SelectInput } from '../form-components/select-input';
import { TextAreaInput } from '../form-components/text-area-input';
import { SubmitButton } from '../form-components/submit-button';
import { formTextInput, formSelectInput, formTextAreaInput, formDataArray, 
	initialValues, confessionFormMessages} 
from "../../data/confession_form_data";
import {FormInputObject, FormSelectInputObject, FormTextAreaInputObject} 
from '../../../types/form.types';
import { useMisdemeanourContext } from "../../hooks/use_context";
import { MisdemeanourObject } from '../../../types/misdemeanour_client_types';
import { MisdemeanourKind } from '../../../types/misdemeanours.types';
import { validateInputField } from '../../validate/validate_input_field';

const ConfessionForm = () => {

	const [misdemeanourData, setMisdemeanourData] = useMisdemeanourContext();
	
	const [input, setInput] = useState({...initialValues});
	const [errors, setErrors] = useState({...initialValues});
	const [attempted, setAttempted] = useState(false);
	const [formMessages, setFormMessages] = useState({...confessionFormMessages});

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
			const formResponse = await response.json();
			setFormMessages( 
				{messages: [formResponse.message],
				success: formResponse.success,
				justTalked: formResponse.justTalked}
			);
			if (input.reason !== "just-talk") {
				addDataToMisdemeanourList(input.reason as MisdemeanourKind);
			}
			}  
		} 
		catch (error) {
			console.log(error)
		}
	}
	}

	function addDataToMisdemeanourList(reason: MisdemeanourKind) {
		if (misdemeanourData && setMisdemeanourData) {
			const len = misdemeanourData.length;
		const newRow: MisdemeanourObject = 
			{citizenId: Math.floor(len + Math.random() * 37 * Math.random() * 967), 
				misdemeanour: reason, 
				date: new Date().toLocaleDateString(), 
				indexValue: len.toString()};
					setMisdemeanourData((currentData: Array<MisdemeanourObject>) => 
					[...currentData, newRow]);
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

	return (
		<form className='form' onSubmit = {handleSubmit}>
			{formMessages.messages.map((message: string, index: number) => 
			<FormHeader key = {index.toString()} message = {message}
			success = {formMessages.success} justTalked = {formMessages.justTalked}/>
			)}
			<fieldset className = "fieldset">

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
			id="submitButton" 
			role="submitConfessionButton"
			attempted={attempted}
			errorMessages = {errors}
			/>
			</fieldset>

		</form>	
	);
};
export default ConfessionForm;
