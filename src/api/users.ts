import axios from 'axios';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
});

export async function fetchUsers(): Promise<User[]> {
  const response = await client.get<User[]>('/users');
  return response.data;
}
