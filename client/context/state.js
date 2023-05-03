import { createContext, useContext, useState } from 'react';

export const AppContext = createContext(null);

export function AppWrapper({ children }) {
  const [target, setTarget]= useState("");

  return (
    <AppContext.Provider value={{target,setTarget}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppWrapper;