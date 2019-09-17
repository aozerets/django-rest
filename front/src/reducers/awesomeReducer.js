const InitialState = {
  isVisible: 'topcourses',
  isCovered: false,
  lessonsOpen: false,
  programsOpen: false,
  isSignCourseOpen: false,
  profile: {
    'name': '',
    'surname': '',
    'country': '',
    'city': '',
    'phone': '',
    'company': '',
    'position': '',
    'birthDate': '',
    'user_avatar': ''
  }
};

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
    case 'TOGGLE_HEADER': {
      return {
        ...state,
        isCovered: !state.isCovered,
        programsOpen: false,
        lessonsOpen: false
      };
    }
    case 'TOGGLE_LESSONS': {
      return {
        ...state,
        isCovered: !action.lessonsOpen,
        lessonsOpen: !action.lessonsOpen,
        programsOpen: false
      };
    }
    case 'TOGGLE_PROGRAMS': {
      return {
        ...state,
        isCovered: !action.programsOpen,
        programsOpen: !action.programsOpen,
        lessonsOpen: false
      };
    }
    case 'TOGGLE_SIGN_ON_COURSE': {
      return {
        ...state,
        isSignCourseOpen: !state.isSignCourseOpen
      };
    }
    case 'GET_PROFILE': {
      return {
        ...state,
        profile: action.profile
      };
    }
    case 'SET_PROFILE': {
      return {
        ...state,
        profile: action.profile
      };
    }
    case 'ADD_PROFILE': {
      return {
        ...state,
        profile: action.profile
      };
    }
    default:
      return state
  }
}
export default appReducer;