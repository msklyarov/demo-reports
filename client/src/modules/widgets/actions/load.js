import ActionTypes from '../constants/actionTypes';

export default () => {
  const data = localStorage.getItem('report') || '[]';

  return {
    type: ActionTypes.REPORT_LOAD,
    payload: JSON.parse(data),
  };
};
