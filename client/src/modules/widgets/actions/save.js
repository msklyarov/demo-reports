import ActionTypes from '../constants/actionTypes';

export default data => {
  localStorage.setItem('report', JSON.stringify(data));
  return {
    type: ActionTypes.REPORT_SAVE,
  };
};
