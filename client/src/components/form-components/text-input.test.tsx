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
    const labelText = screen.getByText(
        /Subject/i
    );
   //Assert
expect(labelText).toBeInTheDocument();
});