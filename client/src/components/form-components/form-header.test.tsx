import { render, screen } from '@testing-library/react';
import { it, expect} from 'vitest';
import { FormHeaderProps } from './form-header';
import FormHeader from './form-header';

it('will display thankyou message when just talk message submitted', async () => {

	const requiredProps: FormHeaderProps = {
        message: "Thanks for talking to us",
        success: true,
        justTalked: true
	}

	render(<FormHeader {...requiredProps}/>);
	
	const messageElement = await screen.findByText(/Thanks for talking to us/);
    expect(messageElement).toBeInTheDocument();
});

it('will display View List of Misdemeanours when post sucessful', async () => {

	const requiredProps: FormHeaderProps = {
        message: "View List of Misdemeanours",
        success: null,
        justTalked: null
	}

	render(<FormHeader {...requiredProps}/>);
	
	const messageElement = await screen.findByText(/View List of Misdemeanours/);
    expect(messageElement).toBeInTheDocument();
});