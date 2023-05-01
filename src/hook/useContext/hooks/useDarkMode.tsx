import { useEffect, useState } from 'react';
import { light, dark, Theme } from '../types/theme';

const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>(light);

  const setMode = (mode: Theme) => {
    if (mode === light) {
      window.localStorage.setItem('theme', 'light');
    } else {
      window.localStorage.setItem('theme', 'dark');
    }
    setTheme(mode);
  };

  // 테마를 변경하는 함수임
  const toggleTheme = () => {
    if (theme === light) {
      setMode(dark);
    } else {
      setMode(light);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme !== null) {
      if (localTheme === 'dark') {
        setTheme(dark);
      } else {
        setTheme(light);
      }
    }
  }, []);

  return { theme, toggleTheme };
};

export default useDarkMode;
