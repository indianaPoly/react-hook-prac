import { RecoilRoot } from 'recoil';
import './App.css';
import { useEffect } from 'react';
import RecoilTodoListComponenet from './components/recoil/recoilTodoListComponent';
import fakeAPI from './apis/main';
// import ThemeButton from './hook/useContext/components/themeButton';
// import UserDataSpan from './hook/useContext/components/userDataSpan';
// import Counter from './hook/useReducer/counter';
// import RefCounter from './hook/useRef/refCounter';
// import RefInput from './hook/useRef/refInput';

const App = () => {
  // 비동기로 진행하기 떄문에 먼저 끝나는 순서대로 결과값이 나오는게 맞음.
  useEffect(() => {
    const res = async () => {
      const response = await fakeAPI.getPosts();
      console.log(response.data);
    };
    const res1 = async () => {
      const response = await fakeAPI.getPost(1);
      console.log(response.data);
    };
    res();
    res1();
  }, []);
  return (
    <RecoilRoot>
      <div className="App">
        {/* <ThemeButton />
        <UserDataSpan />
        <Counter />
        <RefCounter />
        <RefInput /> */}
        <RecoilTodoListComponenet />
      </div>
    </RecoilRoot>
  );
};

export default App;
