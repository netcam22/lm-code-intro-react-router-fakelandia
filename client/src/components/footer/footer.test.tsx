import { render, screen } from '@testing-library/react';
import { it, expect} from 'vitest';
import Footer from './footer';

it('renders footer text with name, date and copyright symbol', () => {
	render(<Footer />);
	const footerText = screen.getByText(/@ Annette Le Sage 2024 - Fakelandia/);
	expect(footerText).toBeInTheDocument();
});