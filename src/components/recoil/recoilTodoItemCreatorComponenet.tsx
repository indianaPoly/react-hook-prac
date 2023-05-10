import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../recoil/atom/todoListState';

let id = 0;
const getId = () => {
  id += 1;
  return id;
};

const RecoilTodoItemCreatorComponenet = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button type="button" onClick={addItem}>
        {' '}
        ADD
      </button>
    </div>
  );
};

export default RecoilTodoItemCreatorComponenet;
