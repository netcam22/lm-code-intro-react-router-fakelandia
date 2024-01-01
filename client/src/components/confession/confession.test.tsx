import { render, screen} from '@testing-library/react';
import { it, expect} from 'vitest';
import ConfessionForm from './confession-form';
import Confession from './confession';

it('renders confession title', () => {
	render(<Confession />);
	const confessionTitle = screen.getByText("Confess to Us");
	expect(confessionTitle).toBeInTheDocument();
});

it('renders form element', () => {
	const { container } = render(<ConfessionForm />);
	expect(container.firstChild).toHaveClass('form');
});

