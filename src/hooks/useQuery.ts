// exemple of useQuery hook
import { useQuery } from '@tanstack/react-query';
import { User } from '../types/store/store';

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const useFetchUsers = () => {
  return useQuery<User[], Error>({ queryKey: ['users'], queryFn: fetchUsers });
};

export default useFetchUsers;
