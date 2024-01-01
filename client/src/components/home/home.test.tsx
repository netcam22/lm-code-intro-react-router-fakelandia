import { render, screen } from '@testing-library/react';
import { it, expect} from 'vitest';
import Home from './home';

it('renders home title', () => {
	render(<Home />);
	const homeTitle = screen.getByText(
		/Home/i
	);
	expect(homeTitle).toBeInTheDocument();
});