import { render, screen} from '@testing-library/react';
import { it, expect} from 'vitest';
import { SelectInput, SelectInputProps } from './select-input';
import { MISDEMEANOUR_FORM_OPTIONS, MISDEMEANOUR_FORM_OPTION_VALUES } from '../../data/confession_form_data';
it('renders form label for Reason for contact', () => {

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