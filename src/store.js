import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import mainReducer from './reducers/index';
import authReducer from './reducers/authReducer';
import iouReducer from './reducers/iouReducer';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import {loadAuthToken} from './local-storage';

const rootReducer = combineReducers({
  main: mainReducer,
  form: formReducer,
  auth: authReducer,
  ious: iouReducer,
});

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if(authToken){
  store.dispatch(setAuthToken(authToken));
  store.dispatch(refreshAuthToken(authToken));
}

export default store;