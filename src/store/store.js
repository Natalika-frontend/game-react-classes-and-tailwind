import { gameReducer } from './reducer.js';
import { legacy_createStore } from 'redux';


export const store = legacy_createStore(gameReducer);
