import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Component/Reducers/index';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(ReduxThunk)));

export default store;