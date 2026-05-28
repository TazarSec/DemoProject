import { useEffect, useState } from 'react';
import { fetchUsers, type User } from '../api/users';

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchUsers()
      .then((data) => {
        if (!cancelled) setUsers(data);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load users');
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <p>Loading users…</p>;
  if (error) return <p role="alert">Error: {error}</p>;

  return (
    <section>
      <h1>Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id} className="card">
            <strong>{u.name}</strong> (@{u.username}) — {u.email}
          </li>
        ))}
      </ul>
    </section>
  );
}
