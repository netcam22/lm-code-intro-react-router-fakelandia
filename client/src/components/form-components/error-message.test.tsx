import { render, screen } from '@testing-library/react';
import { it, expect} from 'vitest';
import { ErrorMessage, ErrorMessageProps } from './error-message';

it('will display message when passed through props', async () => {

	const requiredProps: ErrorMessageProps = {
		message: "must be between 10 and 500 characters"
	}

	render(<ErrorMessage {...requiredProps}/>);
	
	const characterElement = await screen.findByText(/must be between 10 and 500 characters/i);
    expect(characterElement).toBeInTheDocument();
});