export const filter = (state = '', action) => {
  switch (action.type) {
    case 'FILTER_CHANGED': {
      return action.filter
    }
    default:
      return state;
  }
};

export const count = (state = 0, action) => {
  switch (action.type) {
    case 'PERSONSS_LOADED': {
      return action.persons.length
    }
    case 'PERSON_ADDED': {
      return state + 1;
    }
    case 'PERSON_REMOVED': {
      return state - 1;
    }
    default:
      return state;
  }
};