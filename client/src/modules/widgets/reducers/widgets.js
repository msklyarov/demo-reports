import ActionTypes from '../constants/actionTypes';
import uuidv4 from 'uuid/v4';

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.WIDGET_CREATE:
      return [...state, { id: uuidv4(), name: action.payload }];

    case ActionTypes.WIDGET_DELETE:
      return state.filter(item => item.id != action.payload);

    default:
      return state;
  }
};
