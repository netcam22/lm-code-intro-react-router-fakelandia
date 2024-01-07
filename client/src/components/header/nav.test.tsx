import { render, screen } from '@testing-library/react';
import { it, expect} from 'vitest';
import Nav from './nav';

it('renders nav', () => {

	render(<Nav />);
	const navItem = screen.getByText(/Confess To Us/i);
	expect(navItem).toBeInTheDocument();
	
});