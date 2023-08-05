import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: '',
    textColor: '',
    primaryColor: '',
    fontFamily: '',
    selectedCard: 'Card1',
  });

  const updateTheme = (updatedTheme) => {
    setTheme({ ...theme, ...updatedTheme });
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
