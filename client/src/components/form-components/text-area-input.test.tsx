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

	const labelText = screen.getByText(
		/Your Confession/i
	);
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