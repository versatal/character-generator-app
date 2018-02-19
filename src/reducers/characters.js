const characterReducerDefaultState = [];

export default (state = characterReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return [
        ...state,
        action.character
      ];
    case 'REMOVE_CHARACTER':    
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_CHARACTER':    
      return state.map((character) => {
        if (character.id === action.id) {
          return {
            ...character,
            ...action.updates
          };
        } else {
          return character;
        }
      });
    case 'SET_CHARACTERS':
      return action.characters;
    default:
      return state;
  }
};