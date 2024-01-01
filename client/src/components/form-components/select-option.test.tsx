import { render, screen } from '@testing-library/react';
import { it, expect} from 'vitest';
import { SelectOption, SelectOptionProps } from './select-option';

it('Option for select element is displayed', () => {

	const requiredProps: SelectOptionProps = {
		option: "I just want to talk",
	    optionValue: "just-talk"
	}

	render(<SelectOption {...requiredProps}/>);
	
	const option = screen.getByRole("option");
    expect(option).toBeInTheDocument();
});