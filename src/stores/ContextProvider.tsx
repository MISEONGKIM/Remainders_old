import React, {useReducer} from 'react';

export const Context = React.createContext();

const initialState = {
  memoList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'MODIFY':
      return {
        ...state,
        memoList: action.value,
      };
  }
};

const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{memoList: state.memoList, dispatch}}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
