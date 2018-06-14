import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import mainReducer from './reducers/index';
import authReducer from './reducers/authReducer';
import iouReducer from './reducers/iouReducer';
import uomeReducer from './reducers/uomeReducer';
import receiptReducer from './reducers/receiptReducer';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import {loadAuthToken} from './local-storage';


const rootReducer = combineReducers({
  main: mainReducer,
  form: formReducer,
  auth: authReducer,
  ious: iouReducer,
  uomes: uomeReducer,
  receipts: receiptReducer
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