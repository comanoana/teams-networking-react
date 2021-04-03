export const persons = (state = [], action) => {
    switch (action.type) {
      case 'PERSONS_LOADED': {
        return action.persons
      }
      case 'PERSON_ADDED': {
        return [...state, action.person];
      }
      case 'PERSON_REMOVED': {
        return state.filter(person => person.id !== action.id);
      }
      default:
        return state;
    }
  };