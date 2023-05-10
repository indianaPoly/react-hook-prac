import { atom } from 'recoil';

interface TodoList {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<TodoList[]>({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});
