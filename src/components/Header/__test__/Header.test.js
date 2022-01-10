import React from 'react';
import Header from '../Header';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
    const component = render(<Header />);
    getByTestId = component.getByTestId;
})

test('header logo renders with correct text', () => {
    const logo = getByTestId('headerLogo');
    expect(logo.textContent).toBe('Tasck');
})

test('header slogan renders with correct text', () => {
    const slogan = getByTestId('headerSlogan');
    expect(slogan.textContent).toBe('A Task Manager to organize your duties')
})