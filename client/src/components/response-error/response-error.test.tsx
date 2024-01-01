import { it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import ResponseError, {ResponseErrorProps } from './response-error';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const server = setupServer();

const serverErrorProps: ResponseErrorProps = {
    errorMessage: "Oops... something went wrong 🤕"
}
it('displays 500 error message', async () => {
    server.use(
        http.get("http://localhost:8080/api/misdemeanours/10", () => {
        return new HttpResponse(null, {
        status: 500,
        headers: {
            'Content-Type': 'text/plain',
        },
        })
    })
    )
    render(<ResponseError {...serverErrorProps}/>);
    const errorElement = await screen.findByText(/Oops... something went wrong 🤕/);
    expect(errorElement).toBeInTheDocument();
});

const teapotErrorProps: ResponseErrorProps = {
    errorMessage: "I'm a tea pot"
}

it('displays 418 error message', async () => {
    server.use(
        http.get("http://localhost:8080/api/misdemeanours/10", () => {
        return new HttpResponse(null, {
        status: 418,
        headers: {
            'Content-Type': 'text/plain',
        },
        })
    })
    )
    render(<ResponseError {...teapotErrorProps}/>);
    const errorElement = await screen.findByText(/I'm a tea pot/);
    expect(errorElement).toBeInTheDocument();
});