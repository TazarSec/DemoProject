import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Home from './Home';

describe('Home', () => {
  it('renders the heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /demo project/i })).toBeInTheDocument();
  });

  it('increments the counter on click', async () => {
    const user = userEvent.setup();
    render(<Home />);

    expect(screen.getByText(/clicked the button 0 times/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /click me/i }));
    expect(screen.getByText(/clicked the button 1 times/i)).toBeInTheDocument();
  });
});
