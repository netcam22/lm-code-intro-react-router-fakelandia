import { MouseEventHandler } from "react";
import { InitialValue } from "../../data/confession_form_data";

interface SubmitButtonProps {
	buttonText: string;
	onSubmitHandler: MouseEventHandler<HTMLButtonElement>;
	errorMessages: InitialValue;
	id: string;
	role: string;
	submitted: boolean;
}

function manageSubmitButton(errorMessages: InitialValue)  {
	const errorData = Object.entries(errorMessages).reduce((acc, [key, value]) => 
		acc = acc + value, "");
	return errorData === ""? false: true;
}

export const SubmitButton : React.FC<SubmitButtonProps> =
	({buttonText, onSubmitHandler, errorMessages, id, role, submitted}) => {
	const disableButton = submitted? manageSubmitButton(errorMessages): false;
	return (
	<button
	className = {role}
	id={id} 
	// eslint-disable-next-line jsx-a11y/aria-role
	role={id} 
	disabled={disableButton}
	onClick={onSubmitHandler}>{buttonText}</ button>
	);
 }