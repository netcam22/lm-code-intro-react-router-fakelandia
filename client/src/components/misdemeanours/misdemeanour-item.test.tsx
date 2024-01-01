import { it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import MisdemeanourItem, { MisdemeanourItemProps } from './misdemeanour-item';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const requiredProps: MisdemeanourItemProps = {
    citizenId: 6937,
    misdemeanour: "vegetables",
    date: "01/01/2024",
    indexValue: "2"
}

const server = setupServer();

it('renders Misdemeanour item on page', async () => {
    server.use(
    http.get("http://localhost:8080/api/misdemeanours/10", () => {
        return new HttpResponse(JSON.stringify({
        citizenId: 6937,
        misdemeanour: "vegetables",
        date: "01/01/2024"
        }), {
        headers: {
            'Content-Type': 'application/json',
        },
        })
    })
    )
    render(<MisdemeanourItem {...requiredProps}/>);
    const itemElement = await screen.findByText(/Not Eating Your Vegetables/);
    expect(itemElement).toBeInTheDocument();
});