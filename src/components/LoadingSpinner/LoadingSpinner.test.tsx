import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
    it('renders the loading component', () => {
        render(<LoadingSpinner />);
    });
});
