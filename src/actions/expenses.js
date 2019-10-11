
import uuid from 'uuid';
import database from '../firebase/firebase'



// ADD_EXPENSE,

export const addExpense = (expense) => ({
   type: "ADD_EXPENSE",
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const  {
      description = '',
   note = '',
    amount = 0,
    createdAt = 0
  } = expenseData;
  const expense = {description, note, amount, createdAt}
  database.ref('expenses').push(expense).then((ref) => {
    dispatch(addExpense({
      id: ref.key,
      ...expense
    }))
  })
  }
}
// REMOVE_EXPENSE,
export const removeExpense = ({id} = {}) => ({
        type: "REMOVE_EXPENSE",
        expense: {
            id
        }
})
// EDIT_EXPENSE,
export const editExpense = (id, update) => ({
type: "EDIT_EXPENSE",
id,
update,
})
//SET_expenses

export const setExpenses = (expenses) => {
  return {
    type: "SET_EXPENSES",
  expenses
  }
}

export const setStartExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((expenses) => {
      const expensesArray = [];
     expenses.forEach((expense) => {
        expensesArray.push({
          id: expense.key,
          ...expense.val()
        })
      })
      dispatch(setExpenses(expensesArray));
    })
    
  }
}