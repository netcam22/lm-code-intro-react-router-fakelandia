import { render, screen } from '@testing-library/react';
import { it, expect} from 'vitest';
import { FormHeaderProps } from './form-header';
import FormHeader from './form-header';

it('will display thankyou message when just talk is true and message submitted', async () => {

	const requiredProps: FormHeaderProps = {
        message: "Thanks for talking to us",
        success: true,
        justTalked: true
	}

	render(<FormHeader {...requiredProps}/>);
	
	const messageElement = await screen.findByText(/Thanks for talking to us/i);
    expect(messageElement).toBeInTheDocument();
});