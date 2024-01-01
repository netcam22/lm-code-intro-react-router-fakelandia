import { render, screen} from '@testing-library/react';
import { it, expect} from 'vitest';
import { MisdemeanourContainer } from './misdemeanour-container';
it('renders misdemeanour title when misdemeanour page loads', () => {
	render(<MisdemeanourContainer />);
	const misdemeanourTitle = screen.getByText("Misdemeanours");
	expect(misdemeanourTitle).toBeInTheDocument();
});