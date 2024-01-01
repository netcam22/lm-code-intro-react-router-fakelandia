import { ErrorMessage } from "../form-components/error-message";

export type ReponseErrorProps = {
    errorMessage: string;
}

const ResponseError: React.FC<ReponseErrorProps> = ({errorMessage}) => <>
    <h2 className='response-error'>{errorMessage}</h2>
</>;

export default ResponseError;