import { MouseEventHandler } from "react";
import { InitialValue } from "../../data/confession_form_data";

interface SubmitButtonProps {
	buttonText: string;
	onSubmitHandler: MouseEventHandler<HTMLButtonElement>;
	errorMessages: InitialValue;
	id: string;
	role: string;
	attempted: boolean;
}

function manageSubmitButton(errorMessages: InitialValue)  {
	const errorData = Object.entries(errorMessages).reduce((acc, [key, value]) => 
		acc = acc + value, "");
	return errorData === ""? false: true;
}

export const SubmitButton : React.FC<SubmitButtonProps> =
	({buttonText, onSubmitHandler, errorMessages, id, role, attempted}) => {
	const disableButton = attempted? manageSubmitButton(errorMessages): false;
	return (
	<button
	className = "form__button"
	id={id} 
	// eslint-disable-next-line jsx-a11y/aria-role
	role={id} 
	disabled={disableButton}
	onClick={onSubmitHandler}>{buttonText}</ button>
	);
 }