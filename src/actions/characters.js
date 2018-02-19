import uuid from 'uuid';
import database from '../firebase/firebase';
import characters from '../reducers/characters';
//add character

 export const addCharacter = (character) => ({
  type: 'ADD_CHARACTER',
  character
});

export const startAddCharacter = (characterData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = '',
      system = '',
      shortDescription = '',
      createdBy = '',
      createdAt = 0 
    } = characterData;
    const character = { name, system, shortDescription, createdBy, createdAt };

    database.ref(`users/${uid}/characters`).push(character).then((ref) => {
      dispatch(addCharacter({
        id: ref.key,
        ...character
      }));
    });
  };
};

//remove character

export const removeCharacter = ({ id } = {}) => ({
  type: 'REMOVE_CHARACTER',
  id
});

export const startRemoveCharacter = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/characters/${id}`).remove().then(() => { 
      dispatch(removeCharacter({ id }));
    }).catch((e) => {console.log('Fetch failed.', e)});
  };
};

//edit character

export const editCharacter = (id, updates) => ({
  type: 'EDIT_CHARACTER',
  id,
  updates
});

export const startEditCharacter = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/characters/${id}`).update(updates).then(() => {
      dispatch(editCharacter(id, updates));
    });
  };
};

//Set Characters

export const setCharacters = (characters) => ({
  type: "SET_CHARACTERS",
  characters
});

export const startSetCharacters = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/characters`).once('value').then((snapshot) => {
      const characters = [];
      snapshot.forEach((childSnapshot) => {
        characters.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });              
      dispatch(setCharacters(characters));
    }).catch((e) => {console.log('Fetch failed.', e)});
  };
};