import { useRecoilState } from 'recoil';
import { FC } from 'react';
import { todoListState } from '../../recoil/atom/todoListState';

interface TodoList {
  id: number;
  text: string;
  isComplete: boolean;
}

interface Props {
  item: TodoList;
}

/**
 * @param arr 기존 todoList 배열을 가져옴
 * @param index 변경하고자 하는 index의 값을 가져옴
 * @param newValue 새로 변경된 값을 넣음
 * @returns 수정하고자 하는 index의 todoList의 값을 변경하고 저장하기 위해서 사용하는 함수
 */
const replaceItemAtIndex = (
  arr: TodoList[],
  index: number,
  newValue: TodoList
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

/**
 *
 * @param arr 기존 todoList 배열을 가져옴
 * @param index 삭제하고자 하는 index의 값을 가져옴
 * @returns 삭제하고자 하는 index의 값을 삭제하고 이후의 값을 연결하기 위해서 사용하는 함수
 */
const removeItemAtIndex = (arr: TodoList[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const RecoilTodoItemComponent: FC<Props> = ({ item }) => {
  const { text, isComplete } = item;
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: event.target.value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={isComplete}
        onChange={toggleItemCompletion}
      />
      <button type="button" onClick={deleteItem}>
        delete
      </button>
    </div>
  );
};

export default RecoilTodoItemComponent;
