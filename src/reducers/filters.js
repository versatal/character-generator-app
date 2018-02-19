import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'level',
  startDate: moment(),
  endDate: moment()
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':    
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_SYSTEM':    
      return {
        ...state,
        sortBy: 'SYSTEM'
      };
    case 'SORT_BY_NAME':    
      return {
        ...state,
        sortBy: 'name'
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