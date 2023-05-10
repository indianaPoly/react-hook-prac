import { selector } from 'recoil';
import { todoListFilterState, todoListState } from '../atom/todoListState';

/**
 * todoListFilterState, todoListState 내부적으로 2개의 의존성이 존재, 1개라도 하면 재실행된다.
 */
const filteredTodoListState = selector({
  key: '"todoListFilterState',
  get: ({ get }) => {
    const filters = get(todoListFilterState);
    const list = get(todoListState);
    switch (filters) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show UnCompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export default filteredTodoListState;
