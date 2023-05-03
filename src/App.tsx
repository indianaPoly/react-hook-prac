import './App.css';
import ThemeButton from './hook/useContext/components/themeButton';
import UserDataSpan from './hook/useContext/components/userDataSpan';
import Counter from './hook/useReducer/counter';
import RefCounter from './hook/useRef/refCounter';
import RefInput from './hook/useRef/refInput';

const App = () => {
  return (
    <div className="App">
      <ThemeButton />
      <UserDataSpan />
      <Counter />
      <RefCounter />
      <RefInput />
    </div>
  );
};

export default App;
