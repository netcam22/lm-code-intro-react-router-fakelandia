import { render, screen} from '@testing-library/react';
import { it, expect} from 'vitest';
import { TextInput } from './text-input';
import { TextInputProps } from "./text-input";

it('renders form label for subject', () => {
    //Arrange
const requiredProps: TextInputProps = {
    title: "Subject",
    role: "subject",
    value: "Confession",
    onChange: () => {},
    errorMessage: "",
    attempted: false
    };
   //Act
    render(<TextInput {...requiredProps}/>);
    const labelText = screen.getByText(/Subject/);
   //Assert
expect(labelText).toBeInTheDocument();
});

it('renders subject input field', () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Subject",
        role: "subject",
        value: "Confession",
        onChange: () => {},
        errorMessage: "",
        attempted: false
    };
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Subject");
	//Assert
    expect(inputField).toBeInTheDocument();
});

it('displays My Confession in input field when typed by user', () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Subject",
        role: "subject",
        value: "My Confession",
        onChange: () => {},
        errorMessage: "",
        attempted: false
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Subject");
	//Assert
	expect(inputField.value).toBe("My Confession");
});

it('displays error message under input field if confession attempted and value is invalid', () => {
    //Arrange;
	const requiredProps = {
		title: "Subject",
        role: "subject",
        value: "M",
        onChange: () => {},
        errorMessage: "must be between 2 and 20 characters",
        attempted: true
	};
	render(<TextInput {...requiredProps}/>);
	//Act
	const message = screen.getByText(/must be between 2 and 20 characters/);
	//Assert
	expect(message).toBeInTheDocument();
});

it('displays error message under input field if no input', () => {
    //Arrange;
	const requiredProps = {
		title: "Subject",
        role: "subject",
        value: "",
        onChange: () => {},
        errorMessage: "Subject required",
        attempted: true
	};
	render(<TextInput {...requiredProps}/>);
	//Act
	const message = screen.getByText(/Subject required/);
	//Assert
	expect(message).toBeInTheDocument();
});