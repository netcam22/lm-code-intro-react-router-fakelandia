import { it, expect, beforeAll, afterAll, afterEach, vi, beforeEach } from 'vitest';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import MisdemeanourItem, { MisdemeanourItemProps } from './misdemeanour-item';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const requiredProps1: MisdemeanourItemProps = {
    citizenId: 6937,
    misdemeanour: "vegetables",
    date: "01/01/2024",
    indexValue: "2"
}

const server = setupServer();

it('renders misdemeanour vegetables item on page with api response data', async () => {
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
    render(<MisdemeanourItem {...requiredProps1}/>);
    const itemElement = await screen.findByText(/Not Eating Your Vegetables/);
    expect(itemElement).toBeInTheDocument();
});

const requiredProps2: MisdemeanourItemProps = {
    citizenId: 1234,
    misdemeanour: "rudeness",
    date: "07/01/2024",
    indexValue: "3"
}


it('renders misdemeanour rudeness item on page with api response data', async () => {
    server.use(
    http.get("http://localhost:8080/api/misdemeanours/10", () => {
        return new HttpResponse(JSON.stringify({
        citizenId: 1234,
        misdemeanour: "rudeness",
        date: "07/01/2024"
        }), {
        headers: {
            'Content-Type': 'application/json',
        },
        })
    })
    )
    render(<MisdemeanourItem {...requiredProps2}/>);
    const itemElement = await screen.findByText(/Mild Public Rudeness/);
    expect(itemElement).toBeInTheDocument();
});


const requiredProps3: MisdemeanourItemProps = {
    citizenId: 1234,
    misdemeanour: "rudeness",
    date: "15/01/2022",
    indexValue: "3"
}


it('renders date on misdemeanour page with api response data', async () => {

    server.use(
    http.get("http://localhost:8080/api/misdemeanours/10", () => {
        return new HttpResponse(JSON.stringify({
        citizenId: 6937,
        misdemeanour: "rudeness",
        date: "15/01/2022"
        }), {
        headers: {
            'Content-Type': 'application/json',
        },
        })
    })
    )
    render(<MisdemeanourItem {...requiredProps3}/>);
    const year = await screen.findByText(/2022/);
    const month = await screen.findByText(/01/);
	const day = await screen.findByText(/15/);
	expect(year).toBeInTheDocument();
    expect(month).toBeInTheDocument();
	expect(day).toBeInTheDocument();
});