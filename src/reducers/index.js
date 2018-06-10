import { TOGGLE_LOGIN_MODAL, TOGGLE_SIGNUP_MODAL } from '../actions';

const initState = {
  modals: {
    loginModal: false,
    signupModal: false
  }
};

export default (state=initState, action) => {
  switch(action.type){
  case TOGGLE_LOGIN_MODAL:
    return {...state, 
      modals: {...state.modals, loginModal: !state.modals.loginModal}};
  case TOGGLE_SIGNUP_MODAL:
    return {...state,
      modals: {...state.modals, signupModal: !state.modals.signupModal}};
  default:
    return state;
  }
};