import React from 'react';
import { render } from '@testing-library/react';
import App from '../../frontend/src/App';

describe('Frontend Tests', () => {
  it('renders the App component successfully', () => {
    const { getByText } = render(<App />);
    expect(getByText('Referral Management Dashboard')).toBeInTheDocument();
  });
});
