export interface ErrorMessageProps{
	message: string;
}

export const ErrorMessage : React.FC<ErrorMessageProps> = ({message}) => (
    <span className = "error">{message}</span>
);