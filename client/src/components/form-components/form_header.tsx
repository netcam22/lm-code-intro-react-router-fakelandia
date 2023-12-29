interface FormHeaderProps {
	message: string;
	success: boolean;
	justTalked: boolean;
}
const FormHeader: React.FC<FormHeaderProps> = ({message, success, justTalked}) => 
	{
		return (
			<>
			{success === null && justTalked === null &&
			<p className = "form__message form__message--valid">{message}</p>
			}
			{success !== null && justTalked !== null && success && justTalked &&
			<p className = "form__message form__message--valid form__message--response">{message}</p>
			}
			{success !== null && justTalked !== null && !success &&
			<p className = "form__message form__message--error form__message--response">{message}</p>
			}
			</>
			)
	}
	
;

export default FormHeader;
