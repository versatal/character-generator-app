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

export const sortByLevel = () => ({
  type: 'SORT_BY_LEVEL'
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