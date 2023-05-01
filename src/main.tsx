import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import UserContext from './hook/useContext/context/UserContext';
import ThemeContext from './hook/useContext/context/ThemeContext';
import useDarkMode from './hook/useContext/hooks/useDarkMode';
import useUserDataChange from './hook/useContext/hooks/useUserDataChange';

const ThemeContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useDarkMode();
  const themeProviderValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );
  return (
    <ThemeContext.Provider value={themeProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const UserContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const { userData, toggleUser } = useUserDataChange();
  const userProviderValue = useMemo(
    () => ({
      userData,
      toggleUser,
    }),
    [userData, toggleUser]
  );
  return (
    <UserContext.Provider value={userProviderValue}>
      {children}
    </UserContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeContextWrapper>
    <UserContextWrapper>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserContextWrapper>
  </ThemeContextWrapper>
);
