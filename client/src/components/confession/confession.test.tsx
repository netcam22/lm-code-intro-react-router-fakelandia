import { render, screen} from '@testing-library/react';
import { it, expect} from 'vitest';
import Confession from './confession';

it('renders confession title when confession page loads', () => {
	render(<Confession />);
	const confessionTitle = screen.getByText("Confess to Us");
	expect(confessionTitle).toBeInTheDocument();
});

it('renders form element when confession page loads', () => {
	const { container } = render(<Confession />);
	expect(container.firstChild).toHaveClass('confession');
});
