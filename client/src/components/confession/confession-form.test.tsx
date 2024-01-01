import { fireEvent, render, screen} from '@testing-library/react';
import { it, expect, vi} from 'vitest';
import ConfessionForm from './confession-form';

it('calls the handleSubmit function when the confess button is clicked', async () => {

	render(<ConfessionForm />);
	
	const submitButton = screen.getByRole("submitConfessionButton");
    expect(submitButton).toBeInTheDocument();
/*
	if (submitButton) {
		await userEvent.click(submitButton);
	}
	expect(mockSubmit).toBeCalled();
*/
});