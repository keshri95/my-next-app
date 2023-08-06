import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    selectedCard: 'Card1',
    scrollDirection: 'vertical',
    backgroundColor: 'false',
    textColor: 'false',
    primaryColor: 'false',
    fontFamily: 'false',
  });

  const updateTheme = (updates) => {
    setTheme((prevTheme) => ({ ...prevTheme, ...updates }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
