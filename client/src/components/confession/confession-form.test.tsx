import { fireEvent, render, screen} from '@testing-library/react';
import { it, expect, vi} from 'vitest';
import ConfessionForm from './confession-form';
import { ConfessionFormProps } from './confession-form';

it('shows the submit button in the document', async () => {

	const requiredProps: ConfessionFormProps = {
		attempted: true,
		errors: {subject: '', reason: '', details: ''},
		hasErrors: false,
		handleSubmit: () => {},
		formMessages: {messages:  
			['Thanks for talking to us'],
			success: true,
			justTalked: true
		}
	}
	render(<ConfessionForm {...requiredProps}/>);
	
	const submitButton = screen.getByRole("submitConfessionButton");
    expect(submitButton).toBeInTheDocument();

});

it('calls the handleSubmit function when user submits form', () => {

	const mockSubmit = vi.fn();
	const requiredProps: ConfessionFormProps = {
		attempted: true,
		errors: {subject: '', reason: '', details: ''},
		hasErrors: false,
		handleSubmit: mockSubmit,
		formMessages: {messages:  
			['Thanks for talking to us'],
			success: true,
			justTalked: true
		}
	}

	render(<ConfessionForm {...requiredProps}/>);

	const form = screen.getByRole("confession-form");
	expect(form).toBeInTheDocument();

	fireEvent.submit(form);

	expect(mockSubmit).toHaveBeenCalledTimes(1);

});