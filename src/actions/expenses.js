

import database from '../firebase/firebase'



// ADD_EXPENSE,

export const addExpense = (expense) => ({
   type: "ADD_EXPENSE",
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const  {
      description = '',
   note = '',
    amount = 0,
    createdAt = 0
  } = expenseData;
  const expense = {description, note, amount, createdAt}
  database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
    dispatch(addExpense({
      id: ref.key,
      ...expense
    }))
  })
  }
}
// REMOVE_EXPENSE,
  const removeExpense = ({id} = {}) => ({
        type: "REMOVE_EXPENSE",
        expense: {
            id
        }
})
export const setRemoveExpense = ({id}={}) => {
  return (dispatch, getState )=> {
    const uid = getState().auth.uid;
   return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({id}))
    })
  }
}


// EDIT_EXPENSE,
 const editExpense = (id, update) => ({
type: "EDIT_EXPENSE",
id,
update,
})
export const setEditExpense = (id, update) => {
      return (dispatch, getState) => {
    const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}/`).update(update).then(() => {
          dispatch(editExpense(id, update))
        })
      }
}
//SET_expenses

export const setExpenses = (expenses) => {
  return {
    type: "SET_EXPENSES",
  expenses
  }
}

export const setStartExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((expenses) => {
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