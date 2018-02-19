const profileReducerDefaultState = {};

export default (state = profileReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PROFILE':
      return [
        ...state,
        action.profile
      ];
    case 'REMOVE_PROFILE':    
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_PROFILE':    
      return state.map((profile) => {
        if (profile.id === action.id) {
          return {
            ...profile,
            ...action.updates
          };
        } else {
          return profile;
        }
      });
    case 'SET_PROFILE':
      return action.profile;
    default:
      return state;
  }
};