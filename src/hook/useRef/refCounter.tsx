import { useRef } from 'react';
/**
 * @todo
 * 버튼이 눌린다고 해서 값이 화면에 직접 그려지는 것이 아니라 내부의 값만 증가하는 것을 확인할 수 있다.
 * 화면이 렌더링이 되면 그 때서야 값이 변경됨을 알 수 있다.
 * 새로고침하면 값이 다 날아감.
 *
 * 추가적으로 값을 직접 수정할 수 있는데 그 이유는 제네릭 타입과 동일한 초기 인자를 주었기 때문에 변경이 가능한 것이다.
 */
const RefCounter = () => {
  const localVarRef = useRef<number>(0);
  const handleClick = () => {
    localVarRef.current += 1;
    console.log(localVarRef.current);
  };
  return (
    <div>
      <span>버튼 누른 횟수 :{localVarRef.current}</span>
      <button type="button" onClick={handleClick}>
        버튼
      </button>
    </div>
  );
};

export default RefCounter;
