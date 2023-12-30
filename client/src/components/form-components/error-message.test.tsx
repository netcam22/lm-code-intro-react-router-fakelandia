import { render, screen } from '@testing-library/react';
import { it, expect} from 'vitest';
import { ErrorMessage, ErrorMessageProps } from './error-message';

it('will display message about invalid data when passed through props', async () => {

	const requiredProps: ErrorMessageProps = {
		message: "must be between 10 and 500 characters"
	}

	render(<ErrorMessage {...requiredProps}/>);
	
	const characterElement = await screen.findByText(/must be between 10 and 500 characters/i);
    expect(characterElement).toBeInTheDocument();
});

it('form displays when message about missing input field passed in through props', () => {

	const requiredProps: ErrorMessageProps = {
		message: "Reason for contact required"
	}

	render(<ErrorMessage {...requiredProps}/>);
	
	const text = screen.getByText(
		/Reason for contact required/i
	);
	expect(text).toBeInTheDocument();
});