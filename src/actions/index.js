import * as TYPES from './types';

export const signIn = userId => {
  return {
    type: TYPES.SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: TYPES.SIGN_OUT,
  };
};
