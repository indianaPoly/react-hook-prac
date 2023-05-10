import { RecoilRoot } from 'recoil';
import './App.css';
import RecoilTodoListComponenet from './components/recoil/recoilTodoListComponent';
// import ThemeButton from './hook/useContext/components/themeButton';
// import UserDataSpan from './hook/useContext/components/userDataSpan';
// import Counter from './hook/useReducer/counter';
// import RefCounter from './hook/useRef/refCounter';
// import RefInput from './hook/useRef/refInput';

const App = () => {
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
