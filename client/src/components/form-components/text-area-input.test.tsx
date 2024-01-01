import { render, screen} from '@testing-library/react';
import { it, expect} from 'vitest';
import { TextAreaInput, TextAreaInputProps } from "./text-area-input";

it('renders form label Your Confession', () => {

	const requiredProps: TextAreaInputProps = {
		title: "Your Confession",
        role: "details",
        value: "",
        onChange: () => {},
        errorMessage: "",
        attempted: false,
		size: {rows: 8, cols: 10}
	};
	render(<TextAreaInput {...requiredProps}/>);

	const labelText = screen.getByText(/Your Confession/);
	expect(labelText).toBeInTheDocument();
});

it('renders Your Confession text area input field', () => {
    //Arrange
	const requiredProps: TextAreaInputProps = {
		title: "Your Confession",
        role: "details",
        value: "",
        onChange: () => {},
        errorMessage: "",
        attempted: false,
		size: {rows: 8, cols: 10}
	};
	//Act
	render(<TextAreaInput {...requiredProps}/>);
	const inputField: HTMLTextAreaElement = screen.getByLabelText("Your Confession");
	//Assert
    expect(inputField).toBeInTheDocument();
});

it("displays I didn't eat any vegetables yesterday when input by user", () => {
    //Arrange
	const requiredProps: TextAreaInputProps = {
		title: "Your Confession",
        role: "details",
        value: "I didn't eat any vegetables yesterday",
        onChange: () => {},
        errorMessage: "",
        attempted: false,
        size: {rows: 8, cols: 10}
	};
	//Act
	render(<TextAreaInput {...requiredProps}/>);
	const inputField: HTMLTextAreaElement = screen.getByLabelText("Your Confession");
	//Assert
	expect(inputField.value).toBe("I didn't eat any vegetables yesterday");
});

it('displays error message under text area field if too few characters input', () => {
    //Arrange;
	const requiredProps = {
		title: "Your Confession",
        role: "details",
        value: "I didn't",
        onChange: () => {},
        errorMessage: "must be between 10 and 500 characters",
        attempted: true,
        size: {rows: 8, cols: 10}
	};
	render(<TextAreaInput {...requiredProps}/>);
	//Act
	const message = screen.getByText(
		/must be between 10 and 500 characters/
	);
	//Assert
	expect(message).toBeInTheDocument();
});

it('displays error message under text area field if no input', () => {
    //Arrange;
	const requiredProps = {
		title: "Your Confession",
        role: "details",
        value: "",
        onChange: () => {},
        errorMessage: "Reason for contact required",
        attempted: true,
        size: {rows: 8, cols: 10}
	};
	render(<TextAreaInput {...requiredProps}/>);
	//Act
	const message = screen.getByText(/Reason for contact required/);
	//Assert
	expect(message).toBeInTheDocument();
});