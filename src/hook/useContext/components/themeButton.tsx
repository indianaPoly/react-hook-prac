import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { light } from '../types/theme';

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button type="button" onClick={toggleTheme}>
        {theme === light ? <span>🔴</span> : <span>🌚</span>}
      </button>
    </div>
  );
};

export default ThemeButton;
