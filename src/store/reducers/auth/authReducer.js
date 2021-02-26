import { asyncActionError, asyncActionFinish, asyncActionStart } from '../async/asyncReducer';
import { SIGN_IN_USER, SIGN_OUT_USER } from './authConstants';

const initialState = {
  authenticated: false,
  currentUser: null,
  prevLocation: null,
};
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
export function signin(user){
  return async function(dispatch){
      dispatch(asyncActionStart());
      try {
          await delay(3000);
          dispatch({type:SIGN_IN_USER,payload:user})
          dispatch(asyncActionFinish())
      } catch (error) {
          dispatch(asyncActionError(error))
      }
  }
}

export function signout(){
  return async function(dispatch){
      dispatch(asyncActionStart());
      try {
          await delay(3000);
          dispatch({type:SIGN_OUT_USER})
          dispatch(asyncActionFinish)
      } catch (error) {
          dispatch(asyncActionError(error))
      }
  }
}

export default function authReducer(state = initialState, action) {
  const  { type, payload }  =action
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          name: payload.firstname+payload.lastname,
          uid: payload._id,
          
        },
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };
    
    default:
      return state;
  }
}