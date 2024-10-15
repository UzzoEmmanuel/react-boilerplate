export interface User {
  id: number;
  name: string;
}

export interface StoreState {
  count: number;
  users: User[];
  increaseCount: () => void;
  addUser: (user: User) => void;
}
