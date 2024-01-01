import { render, screen} from '@testing-library/react';
import { it, expect} from 'vitest';
import ConfessionForm from './confession-form';

it('calls the handleSubmit function when the form is submitted', async () => {
	render(<ConfessionForm />);
	
	const submitButton = screen.getByRole("submitConfessionButton");
    expect(submitButton).toBeInTheDocument();

});