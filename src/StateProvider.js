import React, { createContext, useReducer, useContext } from 'react';

// Prepare the DataLayer
export const StateContext = createContext();

// Wrap our App and Provide the DataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information From the DataLayer
export const useStateValue = () => useContext(StateContext);
