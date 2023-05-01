import './App.css';
import ThemeButton from './hook/useContext/components/themeButton';
import UserDataSpan from './hook/useContext/components/userDataSpan';

const App = () => {
  return (
    <div className="App">
      <ThemeButton />
      <UserDataSpan />
    </div>
  );
};

export default App;
