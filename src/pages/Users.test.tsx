import { render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Users from './Users';
import * as api from '../api/users';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Users', () => {
  it('renders users returned from the API', async () => {
    vi.spyOn(api, 'fetchUsers').mockResolvedValue([
      { id: 1, name: 'Ada Lovelace', username: 'ada', email: 'ada@example.com' },
      { id: 2, name: 'Alan Turing', username: 'alan', email: 'alan@example.com' },
    ]);

    render(<Users />);

    await waitFor(() => {
      expect(screen.getByText(/ada lovelace/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/alan turing/i)).toBeInTheDocument();
  });

  it('shows an error if the request fails', async () => {
    vi.spyOn(api, 'fetchUsers').mockRejectedValue(new Error('boom'));

    render(<Users />);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/boom/i);
    });
  });
});
