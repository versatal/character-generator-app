//
//  Convert to character vault - add dummy data
//

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//add character

const addCharacter = (
  { 
    level = 1, 
    characterClass = '', 
    race = '', 
    alignment = '',
    createdBy = '',
    createdAt = undefined 
  } = {}
) => ({
  type: 'ADD_CHARACTER',
  character: {
    id: uuid(),
    level,
    characterClass,
    race,
    alignment,
    createdBy,
    createdAt
  }
});

//remove character

const removeCharacter = ({ id } = {}) => ({
  type: 'REMOVE_CHARACTER',
  id
});

//edit character

const editCharacter = (id, updates) => ({
  type: 'EDIT_CHARACTER',
  id,
  updates
});


//set text filters

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//sort by date

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

//sort by amount

const sortByLevel = () => ({
  type: 'SORT_BY_LEVEL'
});

//set start date
const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

//set end date
const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});


//character reducer

const characterReducerDefaultState = [];

const charactersReducer = (state = characterReducerDefaultState, action) => {
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
    default:
      return state;
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'level',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':    
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_LEVEL':    
      return {
        ...state,
        sortBy: 'level'
      };
    case 'SORT_BY_DATE':    
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':    
      return {
        ...state,
        startDate: action.date
      };
    case 'SET_END_DATE':    
      return {
        ...state,
        endDate: action.date 
      };
    default:
      return state;
  }
}

//Get visible characters
const getVisibleCharacters = (characters, {text, sortBy, startDate, endDate}) => {
  return characters.filter((character) => {
    const startDateMatch = typeof startDate !== 'number' || character.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || character.createdAt <= endDate;;
    const textMatch = character.characterClass.toLowerCase().includes(text.toLowerCase());    

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'level') {
      return a.level < b.level ? 1 : -1
    } else if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1      
    }
  });
};


//store creation

const store = createStore(
  combineReducers({
    characters: charactersReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleCharacters = getVisibleCharacters(state.characters, state.filters)
  console.log(visibleCharacters);
});

const characterOne = store.dispatch(addCharacter({ level: 1, characterClass: 'Cleric', createdAt: -21000 }));
const characterTwo = store.dispatch(addCharacter({ level: 20, characterClass: 'Wizard', createdAt: -1000 }));

//store.dispatch(removeCharacter({ id: characterOne.character.id }));
//store.dispatch(editCharacter(characterTwo.character.id, {alignment: 'lawful good'} ));

//store.dispatch(setTextFilter('e'));
store.dispatch(setTextFilter(''));

//store.dispatch(sortByLevel());
//store.dispatch(sortByDate());

 store.dispatch(setStartDate(-40000));
// store.dispatch(setStartDate());
 store.dispatch(setEndDate(1250));
