import * as ActionTypes from './actionTypes';
import {Fetch} from "../components/Utils";

export const togglePage = page => {
  return {
    type: ActionTypes.TOGGLE_PAGE,
    isVisible: page
  }
};
export const toggleHeader = () => {
  return {
    type: ActionTypes.TOGGLE_HEADER,
  }
};
export const togglePrograms = status => {
  return {
    type: ActionTypes.TOGGLE_PROGRAMS,
    programsOpen: status
  }
};
export const toggleLessons = status => {
  return {
    type: ActionTypes.TOGGLE_LESSONS,
    lessonsOpen: status
  }
};
export const toggleGradebook = status => {
  return {
    type: ActionTypes.TOGGLE_GRADEBOOK,
    gradebookOpen: status
  }
};
export const toggleSignCourse = () => {
  return {
    type: ActionTypes.TOGGLE_SIGN_ON_COURSE,
  }
};
export const addProfile = profile => ({
  type: ActionTypes.ADD_PROFILE,
  profile: profile
});
export const getGradeList = programs => {
  let titles = [];
  const grades = programs.map((program) => {
    titles.push(program['title']);
    return {
      id: program['id'],
      title: program['title'],
      students: program['students']
    }
  });
  return {
    type: ActionTypes.ADD_GRADEBOOK,
    gradebook: {
      grades: grades,
      titles: titles
    }
  }
};
export const getProfile = () => dispatch => {
  console.log("getting profile");
  Fetch('/profile/', 'GET')
    .then(res => {
      const profile = {};
      Object.keys(res).map((key) => (res[key] == null) ? profile[key] = '' : profile[key] = res[key] );
      if (profile['birth_date']) {
        profile['birthDate'] = new Date(profile['birth_date'])
      }
      dispatch(addProfile(profile))
    })
    .catch((e) => {
      console.log(e);
    });
};
export const setProfile = formData => dispatch => {
  Fetch('/profile/', 'PUT', formData)
    .then(() => dispatch(togglePage()))
    .then(() => dispatch(getProfile()))
    .catch((e) => {
      e.then(e => alert(e))
    })
};