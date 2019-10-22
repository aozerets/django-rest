import { InitialState } from "../constants/constants";

function appReducer(state = InitialState, action) {
  console.log(action);
  switch (action.type) {
    case 'TOGGLE_PAGE': {
      return {
        ...state,
        isVisible: action.isVisible ? action.isVisible : 'topcourses',
        isCovered: false,
        programsOpen: false,
        lessonsOpen: false,
        gradebookOpen: false
      };
    }
    case 'TOGGLE_HEADER': {
      return {
        ...state,
        isCovered: !state.isCovered,
        programsOpen: false,
        lessonsOpen: false,
        gradebookOpen: false
      };
    }
    case 'TOGGLE_LESSONS': {
      return {
        ...state,
        isCovered: !action.lessonsOpen,
        lessonsOpen: !action.lessonsOpen,
        programsOpen: false,
        gradebookOpen: false
      };
    }
    case 'TOGGLE_PROGRAMS': {
      return {
        ...state,
        isCovered: !action.programsOpen,
        programsOpen: !action.programsOpen,
        lessonsOpen: false,
        gradebookOpen: false
      };
    }
    case 'TOGGLE_GRADEBOOK': {
      return {
        ...state,
        isCovered: !action.gradebookOpen,
        gradebookOpen: !action.gradebookOpen,
        lessonsOpen: false,
        programsOpen: false
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
        profile: action.profile,
        programsOpen: false,
        lessonsOpen: false,
        gradebookOpen: false
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
    case 'ADD_GRADEBOOK': {
      return {
        ...state,
        gradebook: action.gradebook
      };
    }
    default:
      return state
  }
}
export default appReducer;