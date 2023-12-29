import { useState, ChangeEvent} from 'react';
import { SelectInput } from './select-input';
import { FormSelectInputObject, formSelectInput, 
	InitialValue, errorValues } from '../../data/filter_misdemeanour_form_data';
import { validateInput } from '../../validate/validate_input';
import { useMisdemeanourFilterContext } from '../../hooks/use_context';

export interface InputProps {
	title: string;
	role: string;
	value: string;
	errorMessage: string;
	submitted? : boolean;
}

const FilterMisdemeanoursForm = () => {

	const [input, setInput] = useMisdemeanourFilterContext();
	const [errors, setErrors] = useState({...errorValues});

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
		const errorMessage  = validateInput(title, regex, value, message)
				.reduce((acc: string, message: string) => acc+"; "+message, "")
				.replace("; ", "");
		return errorMessage;
	}

	function handleChange(event: ChangeEvent<HTMLSelectElement>) {
		event.preventDefault();
		if (setInput) {
		setInput((currentData: InitialValue) =>
			Object.assign({}, currentData, {
				[event.target.id]: event.target.value,
			})
		)
		}
		saveInputErrors(event.target.id, event.target.value);
	}

	return (
		<section className='filterMisdemeanoursForm'>
			{formSelectInput.map((field: FormSelectInputObject) => 
				<SelectInput
				key = {field.id}
				title = {field.title} 
				errorMessage = {errors[field.role]}
				value={input? input[field.role]: "all"} 
				onChange={handleChange} 
				role = {field.role} 
				options = {field.options}
				/>)
			}
		</section>	
	);
};
export default FilterMisdemeanoursForm;