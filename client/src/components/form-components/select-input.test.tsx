import { render, screen} from '@testing-library/react';
import { it, expect} from 'vitest';
import { SelectInput, SelectInputProps } from './select-input';
import { MISDEMEANOUR_FORM_OPTIONS, MISDEMEANOUR_FORM_OPTION_VALUES } from '../../data/confession_form_data';
it('displays form label for Reason for contact when rendering confession form', () => {

	const requiredProps : SelectInputProps = {
		title: "Reason for contact",
		role: "reason",
		value: "vegetables",
		onChange: () => {},
		errorMessage: "",
		attempted: false,
		options: MISDEMEANOUR_FORM_OPTIONS, 
        optionValues: MISDEMEANOUR_FORM_OPTION_VALUES
	};
	render(<SelectInput {...requiredProps}/>);

	const labelText = screen.getByText("Reason for contact");
	expect(labelText).toBeInTheDocument();
});

it('displays select input field when rendering confession form', () => {
    //Arrange
	const requiredProps : SelectInputProps = {
		title: "Reason for contact",
		role: "reason",
		value: "vegetables",
		onChange: () => {},
		errorMessage: "",
		attempted: false,
		options: MISDEMEANOUR_FORM_OPTIONS, 
        optionValues: MISDEMEANOUR_FORM_OPTION_VALUES
	};
	//Act
	render(<SelectInput {...requiredProps}/>);
	const selectInput: HTMLSelectElement = screen.getByLabelText("Reason for contact");
	//Assert
    expect(selectInput).toBeInTheDocument();
});

it('Reason for contact input field displays value vegetables', () => {
    //Arrange
	const requiredProps : SelectInputProps = {
		title: "Reason for contact",
		role: "reason",
		value: "vegetables",
		onChange: () => {},
		errorMessage: "",
		attempted: false,
		options: MISDEMEANOUR_FORM_OPTIONS, 
        optionValues: MISDEMEANOUR_FORM_OPTION_VALUES
	};
	//Act
	render(<SelectInput {...requiredProps}/>);
	const selectInput: HTMLSelectElement = screen.getByLabelText("Reason for contact");
	//Assert
	expect(selectInput.value).toBe("vegetables");
});


it('displays error message under select input field if no option selected and attempted', () => {
    //Arrange;
	const requiredProps : SelectInputProps = {
		title: "Reason for contact",
		role: "reason",
		value: "",
		onChange: () => {},
		errorMessage: "Reason for contact required",
		attempted: true,
		options: MISDEMEANOUR_FORM_OPTIONS, 
        optionValues: MISDEMEANOUR_FORM_OPTION_VALUES
	};
	render(<SelectInput {...requiredProps}/>);
	//Act
	const message = screen.getByText(/Reason for contact required/);
	//Assert
	expect(message).toBeInTheDocument();
});