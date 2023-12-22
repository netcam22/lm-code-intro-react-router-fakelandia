export interface SelectOptionProps{
	optionValue: string;
}

export const SelectOption : React.FC<SelectOptionProps> = ({optionValue}) => (
    <option value={optionValue}>{optionValue}</option>
);