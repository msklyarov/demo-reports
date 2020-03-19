import ActionTypes from '../constants/actionTypes';

const sort = (a, b) => {
  const idA = a.id.toUpperCase(); // ignore upper and lowercase
  const idB = b.id.toUpperCase(); // ignore upper and lowercase
  if (idA < idB) {
    return -1;
  }
  if (idA > idB) {
    return 1;
  }

  // names must be equal
  return 0;
};

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.WIDGET_CREATE:
      return [
        ...state,
        {
          id: (
            Date.now().toString(36) +
            Math.random()
              .toString(36)
              .substr(2, 5)
          ).toUpperCase(),
          ...action.payload,
        },
      ].sort(sort);

    case ActionTypes.WIDGET_DELETE:
      return state.filter(item => item.id !== action.payload).sort(sort);

    case ActionTypes.WIDGET_RESIZE:
      return [
        ...state.filter(item => item.id !== action.payload.id),
        {
          ...state.find(item => item.id === action.payload.id),
          width: action.payload.width,
          height: action.payload.height,
        },
      ].sort(sort);

    case ActionTypes.WIDGET_PLACE:
      return [
        ...state.filter(item => item.id !== action.payload.id),
        {
          ...state.find(item => item.id === action.payload.id),
          x: action.payload.x,
          y: action.payload.y,
        },
      ].sort(sort);

    case ActionTypes.WIDGET_CONNECT:
      return [
        ...state.filter(item => item.id !== action.payload.id),
        {
          ...state.find(item => item.id === action.payload.id),
          connected: true,
        },
      ].sort(sort);

    case ActionTypes.WIDGETS_CLEAR:
      return [];

    case ActionTypes.REPORT_LOAD:
      return [...action.payload].sort(sort);

    case ActionTypes.REPORT_LOAD:
    default:
      return state;
  }
};
