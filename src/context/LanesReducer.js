import React, { useReducer } from 'react';

export const CreateTasksReducer = (reducer, actions, initialState) => {
  const LanesContext = React.createContext()

  const LanesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    return <LanesContext.Provider
      value={{ ...state, dispatch }}>
      {children}
    </LanesContext.Provider>
  }

  return { LanesContext, LanesProvider }
}
