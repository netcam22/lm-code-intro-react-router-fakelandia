import { useState, ChangeEvent} from 'react';
import { SelectInput } from '../form-components/select-input';
import { formSelectInput, errorValues } 
from '../../data/filter_misdemeanour_form_data';
import { FormSelectInputObject} from '../../../types/form.types';
import { useMisdemeanourFilterContext } from '../../hooks/use_context';
import { InitialValue } from '../../data/confession_form_data';
import { validateInputField } from '../../validate/validate_input_field';

const FilterMisdemeanoursForm = () => {

	const [selectedOption, setSelectedOption] = useMisdemeanourFilterContext();
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

	function handleChange(event: ChangeEvent<HTMLSelectElement>) {
		event.preventDefault();
		if (setSelectedOption) {
			setSelectedOption((currentData: InitialValue) =>
			Object.assign({}, currentData, {
				[event.target.id]: event.target.value,
			})
		)
		}
		saveInputErrors(event.target.id, event.target.value);
	}

	return (
		<form className='filterMisdemeanoursForm'>
			{formSelectInput.map((field: FormSelectInputObject) => 
				<SelectInput
				key = {field.id}
				title = {field.title} 
				errorMessage = {errors[field.role]}
				value={selectedOption? selectedOption[field.role]: "all"} 
				onChange={handleChange} 
				role = {field.role} 
				options = {field.options}
				optionValues = {field.optionValues}
				attempted = {true}
				/>)
			}
		</form>	
	);
};
export default FilterMisdemeanoursForm;