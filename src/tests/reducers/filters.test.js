import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should setup default filter values', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'e';
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: text });
  expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
  const date = moment();
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: date });
  expect(state.startDate).toBe(date);
});

test('should set endDate filter', () => {
  const date = moment();
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: date });
  expect(state.endDate).toBe(date);
});
