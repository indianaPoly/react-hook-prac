import { createContext } from 'react';
import { Theme, light } from '../types/theme';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: light,
  toggleTheme: () => {
    return null;
  },
});

export default ThemeContext;
