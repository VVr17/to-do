// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore } from 'redux';
// import {rootReducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer, todoReducer } from './reducer';

// Redux Toolkit
// combined Reducer
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filterReducer,
  },
});

// Redux
// to add Redux DevTools
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
