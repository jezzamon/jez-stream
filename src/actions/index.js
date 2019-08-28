import streams from '../apis/streams';
import history from '../history';
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

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({ type: TYPES.CREATE_STREAM, payload: response.data });
  // do some programmatic navigation
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: TYPES.FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: TYPES.FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: TYPES.EDIT_STREAM, payload: response.data });
  // history.push('/')
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: TYPES.DELETE_STREAM, payload: id });
  // history.push('/')
};
