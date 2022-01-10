import React from 'react';
import Footer from '../Footer';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
    const component = render(<Footer />);
    getByTestId = component.getByTestId;
})

test('footer_title renders with correct text', () => {
    const footerTitle = getByTestId('footer_title');
    expect(footerTitle.textContent).toBe('Tasck was developed by William Lengenfelder');
})

test('ancor tag has the right external link', () => {
    const footerExternalLink = getByTestId('footer_link');
    expect(footerExternalLink.href).toBe('https://github.com/willfelder')
})

test('footer_paragraph renders with correct text', () => {
    const footerParagraph = getByTestId('footer_paragraph');
    expect(footerParagraph.textContent).toBe('Visit my Github page')
})