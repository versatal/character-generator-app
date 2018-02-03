import uuid from 'uuid';

//add character

 export const addCharacter = (
  { 
    name = '',
    level = 1, 
    characterClass = '', 
    race = '', 
    alignment = '',
    createdBy = '',
    createdAt = 0 
  } = {}
) => ({
  type: 'ADD_CHARACTER',
  character: {
    id: uuid(),
    name,
    level,
    characterClass,
    race,
    alignment,
    createdBy,
    createdAt
  }
});

//remove character

export const removeCharacter = ({ id } = {}) => ({
  type: 'REMOVE_CHARACTER',
  id
});

//edit character

export const editCharacter = (id, updates) => ({
  type: 'EDIT_CHARACTER',
  id,
  updates
});