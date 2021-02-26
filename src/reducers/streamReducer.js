import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from '../actions/types';

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(...state, action.id);
    default:
      return state;
  }
};

export default streamReducer;

// WE USED .mapkeys() of lodash IN THE FETCH_STREAMS to obtain a new object with this architectural format

// {
//   "1":{
//     "title": "stream title",
//     "description": "stream description",
//     "id":1
//   },
//   "2":{
//     "title": "stream title",
//     "description": "stream description",
//     "id":2
//   },
//   "3":{
//     "title": "stream title",
//     "description": "stream description",
//     "id":3
//   },

// }
