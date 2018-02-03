import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should remove expense by id', () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id: 4, 
    description: 'Movies', 
    note: '', 
    amount: 2000, 
    createdAt: 10000 
  }
  const action = {
    type: "ADD_EXPENSE",
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense by id', () => {
  const updates = { amount: 4700 }
  const action = {
    type: "EDIT_EXPENSE",
    id: 3,
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state[2].amount).toEqual(4700);
});

test('should edit expense by id', () => {
  const updates = { amount: 4700 }
  const action = {
    type: "EDIT_EXPENSE",
    id: '-1',
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

