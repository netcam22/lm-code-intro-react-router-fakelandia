import { InitialValue } from "../../data/confession_form_data";

interface SubmitButtonProps {
	buttonText: string;
	errorMessages: InitialValue;
	id: string;
	role: string;
	attempted: boolean;
}

function manageButtonDisabling(errorMessages: InitialValue)  {
	const errorData = Object.values(errorMessages).reduce((acc, value) => 
		acc = acc + value, "");
	return errorData === ""? false: true;
}

export const SubmitButton : React.FC<SubmitButtonProps> =
	({buttonText, errorMessages, id, role, attempted}) => {
	const disableButton = attempted? manageButtonDisabling(errorMessages): false;
	return (
	<button
	type = 'submit'
	className = "form__button"
	id={id} 
	role={role} 
	disabled={disableButton}>
	{buttonText}</ button>
	);
 }