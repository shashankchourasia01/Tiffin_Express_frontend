import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [state, setState] = useState({
    // your global store state goes here
    user: null,
    cart: [],
  });

  const updateUser = (user) => setState((s) => ({ ...s, user }));
  const addToCart = (item) => setState((s) => ({ ...s, cart: [...s.cart, item] }));

  return (
    <StoreContext.Provider value={{ state, updateUser, addToCart }}>
      {children}
    </StoreContext.Provider>
  );
};
