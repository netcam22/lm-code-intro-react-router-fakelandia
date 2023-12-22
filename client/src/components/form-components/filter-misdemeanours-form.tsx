import { useState, ChangeEvent} from 'react';
import { SelectInput } from './select-input';
import { FormSelectInputObject, formSelectInput, 
	InitialValue, initialValues } from '../../data/filter_misdemeanour_form_data';
import { validateInput } from '../../validate/validate_input';

export interface InputProps {
	title: string;
	role: string;
	value: string;
	errorMessage: string;
}

const FilterMisdemeanoursForm = () => {
	
	const [input, setInput] = useState({...initialValues});
	const [errors, setErrors] = useState({...initialValues});

	function saveInputErrors(dataRole: string, inputValue:string) {
		const dataObject = formSelectInput.find((dataObject: FormSelectInputObject) =>
		dataObject.role === dataRole);
		if (dataObject) {
			const errorString = validateInputField(dataObject.title, 
				dataObject.regex, inputValue, dataObject.errorMessage);
			setInputError(dataRole, errorString);
		}
	}

	function setInputError(dataRole: string, errorString: string) {
		setErrors((currentErrors) =>
				Object.assign({}, currentErrors, {
					[dataRole]: errorString,
				})
		)
	}

	function validateInputField(title:string, regex: Array<RegExp>, value: string, 
		message: Array<string>) {
			console.log(regex);
		const errorMessage  = validateInput(title, regex, value, message)
				.reduce((acc: string, message: string) => acc+"; "+message, "")
				.replace("; ", "");
		return errorMessage;
	}

	function handleChange(event: ChangeEvent<HTMLSelectElement>) {
		event.preventDefault();
		setInput((currentData: InitialValue) =>
			Object.assign({}, currentData, {
				[event.target.id]: event.target.value,
			})
		)
		saveInputErrors(event.target.id, event.target.value);
	}

	return (
		<section className='filterMisdemeanoursForm'>
			{formSelectInput.map((field: FormSelectInputObject) => 
				<SelectInput
				key = {field.id}
				title = {field.title} 
				errorMessage = {errors[field.role]}
				value={input[field.role]} 
				onChange={handleChange} 
				role = {field.role} 
				options = {field.options}
				/>)
			}
		</section>	
	);
};
export default FilterMisdemeanoursForm;