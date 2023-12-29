import { ChangeEventHandler} from 'react';
import { InputProps} from "./confession_form";
import { ErrorMessage } from "./error-message";

export interface TextInputProps extends InputProps {
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export const TextInput : React.FC<TextInputProps> = (props) => {

return (
    <>	<label htmlFor={props.role}>{props.title}</label>
        <input id ={props.role}
			className = "valid"
					type ='text'
					value = {props.value}
					onChange={props.onChange} 
		/>
		{props.submitted && props.errorMessage !== "" &&
		<ErrorMessage message = {props.errorMessage}/>
		}
    </> 
	);
};