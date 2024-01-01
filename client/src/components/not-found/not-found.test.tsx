import { render, screen } from '@testing-library/react';
import { it, expect} from 'vitest';
import NotFound from './not-found';

it('displays not found when component is rendered', () => {
	render(<NotFound />);
	const message = screen.getByText(/NOT FOUND!/);
	expect(message).toBeInTheDocument();
});