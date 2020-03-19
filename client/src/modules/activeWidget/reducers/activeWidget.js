import ActionTypes from '../constants/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case ActionTypes.ACTIVE_WIDGET_SET:
      return action.payload;

    default:
      return state;
  }
};
