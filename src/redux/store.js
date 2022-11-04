import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { rootReducer } from './reducer';

// to add Redux DevTools
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
