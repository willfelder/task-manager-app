import React from 'react';
import TaskForm from '../TaskForm';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
    const component = render(<TaskForm />);
    getByTestId = component.getAllByTestId;
})

test('clear all button works correctly', () => {
    const clearBtnElement = getByTestId('clearBtn');
    fireEvent.click(clearBtnElement, {
        tasks
    })
    expect(clearBtnElement.value).toBe([])
})