import { mapKeys, omit } from 'lodash';
import * as TYPES from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case TYPES.FETCH_STREAMS:
      return { ...state, ...mapKeys(action.payload, 'id') };
    case TYPES.FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case TYPES.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case TYPES.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case TYPES.DELETE_STREAM:
      return omit(state, action.payload);
    default:
      return state;
  }
};
