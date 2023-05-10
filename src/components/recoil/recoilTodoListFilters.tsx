import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../recoil/atom/todoListState';

const RecoilTodoListFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };
  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show UnCompleted">UnCompleted</option>
      </select>
    </>
  );
};

export default RecoilTodoListFilter;
