import { useRef } from 'react';

const RefInput = () => {
  // current만 읽기 전용, current 프로퍼티의 하위 프로퍼티인 value는 여전히 수정 가능
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} />
      <button type="button" onClick={handleClick}>
        클리어
      </button>
    </div>
  );
};

export default RefInput;
