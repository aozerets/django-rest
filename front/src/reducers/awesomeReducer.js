const InitialState = {isVisible: 'topcourses', isCovered: false};

function appReducer(state = InitialState, action) {
  console.log(action);
  switch (action.type) {
    case 'TOGGLE_PAGE': {
      return {
        ...state,
        isVisible: action.isVisible ? action.isVisible : 'topcourses',
        isCovered: false
      };
    }
    case 'TOGGLE_COVERED_HEADER': {
      return {
        ...state,
        isCovered: !action.isCovered
      };
    }
    default:
      return state
  }
}
export default appReducer;