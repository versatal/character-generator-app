//set text filters

export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//sort by name

export const sortByName = () => ({
  type: 'SORT_BY_NAME'
});

//sort by amount

export const sortBySystem = () => ({
  type: 'SORT_BY_SYSTEM'
});

//set start date
export const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

//set end date
export const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});