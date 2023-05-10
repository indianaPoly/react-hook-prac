import { useRecoilValue } from 'recoil';
import RecoilTodoItemComponent from './recoilTodoItemComponent';
import RecoilTodoItemCreatorComponenet from './recoilTodoItemCreatorComponenet';
import RecoilTodoListFilter from './recoilTodoListFilters';
import filteredTodoListState from '../../recoil/selector/filteredTodoListState';

interface TodoList {
  id: number;
  text: string;
  isComplete: boolean;
}

/**
 * 최종적으로 들어가는 값은 필터링된 값이 들어감
 */
const RecoilTodoListComponenet = () => {
  const todoList = useRecoilValue<TodoList[]>(filteredTodoListState);
  return (
    <div>
      <RecoilTodoListFilter />
      <RecoilTodoItemCreatorComponenet />
      {todoList.map((todoListItem) => {
        return (
          <RecoilTodoItemComponent key={todoListItem.id} item={todoListItem} />
        );
      })}
    </div>
  );
};

export default RecoilTodoListComponenet;
