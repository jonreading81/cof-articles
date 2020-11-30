import React, { useState, useReducer, createContext } from 'react';

export const NavigationContext = createContext(null);

export const NavigationContextProvider = (props) => {
  const [state, setState] = useState(false);
  return (
    <NavigationContext.Provider value={[state, setState]}>
      {props.children}
    </NavigationContext.Provider>
  );
};
