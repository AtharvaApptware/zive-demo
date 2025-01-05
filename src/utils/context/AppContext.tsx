/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react';

export const AppContext = createContext<any>({
  // Initialize here
  value: false,
  setValue: () => {},
});

export const AppProvider = ({ children }) => {
  const [state, setState] = useState<any>(null);

  const handleValueChange = (values) => {
    setState({ ...values });
  };

  return (
    <AppContext.Provider value={{ state, handleValueChange }}>
      {children}
    </AppContext.Provider>
  );
};
