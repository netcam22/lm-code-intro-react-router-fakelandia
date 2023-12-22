import { ChangeEventHandler} from 'react';
import { InputProps } from "./filter-misdemeanours-form";
import { SelectOption } from "./select-option";
import { ErrorMessage } from './error-message';
export interface SelectInputProps extends InputProps{
	onChange: ChangeEventHandler<HTMLSelectElement>;
	options: Array<string>;
}

export const SelectInput : React.FC<SelectInputProps> = (props) => {

	return (
    <>
        <label htmlFor={props.role}>{props.title}</label>
        <select id={props.role} value={props.value} 
			onChange={props.onChange}  >
			{props.options.map((option, index) => 
			<SelectOption key = {index.toString()} optionValue ={option} />)}
		</select>
        {props.errorMessage !== "" &&
		<ErrorMessage message = {props.errorMessage}/>
		}
    </> )
}