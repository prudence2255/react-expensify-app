import React from 'react';
import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
// ADD_EXPENSE,

const addExpense = (
    {
        description = '',
     note = '',
      amount = 0,
      createdAt = 0
    } = {}
      ) => ({
   type: "ADD_EXPENSE",
   expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
   }
})

// REMOVE_EXPENSE,
const removeExpense = ({id} = {}) => ({
        type: "REMOVE_EXPENSE",
        expense: {
            id
        }
})
// EDIT_EXPENSE,
const editExpense = (id, update) => ({
type: "EDIT_EXPENSE",
id,
update,
})

// SET_TEXT_FILTER,
const setTextFilter = (text) => (
    {
type: "SET_TEXT_FILTER",
        text,
    }
)


// SORT_BY_DATE,
const sortByDate = () => (
    {
        type: "SORT_BY_DATE",
    }
)
// SORT_BY_AMOUNT,
const sortByAmount = () => (
    {
        type: "SORT_BY_AMOUNT",
    }
)
// START_DATE,
const startDate = (startDate) => (
    {
        type: "START_DATE",
        startDate,
    }
)
// END_DATE,
const endDate = (endDate) => (
    {
        type: "END_DATE",
        endDate,
    }
)

//expenses reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
            switch (action.type) {
                case "ADD_EXPENSE":
                    return [
                        ...state, action.expense
                    ]
                case "REMOVE_EXPENSE":
                    return state.filter((item) => item.id !== action.expense.id);
                 
                case "EDIT_EXPENSE":
                    return state.map((expense) => {
                       if(expense.id === action.id){
                          
                           return {
                               ...expense,
                               ...action.update
                           }
                       }else {
                           return expense
                       }

                    });   
                default:
                   return state;
            }
}
//FILTERS REDUCER

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'Date',
    startDate: undefined,
    endDate: undefined,

}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
switch (action.type) {
    case "SET_TEXT_FILTER":
           return {
               ...state, text: action.text
           }
    case "SORT_BY_AMOUNT":
        return {
            ...state, sortBy: 'amount'
        }
     case "SORT_BY_DATE":
                return {
                    ...state, sortBy: 'date'
                }
     case "START_DATE":
         return {
             ...state, startDate: action.startDate
         }  
     case "END_DATE":
                return {
                    ...state, endDate: action.endDate
                }                         
    default:
     return state;
}
}

//GET VISIBLE EXPENSES
const getVisibleExpenses = (expenses, {text, startDate, endDate, sortBy}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
       return expenses
    }).sort((a, b) => {
        if(sortBy === 'amount') {
            return a.amount <  b.amount ? 1 : -1;
        }
        return expenses;
    })
    
}

//CREATE STORE
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    })
);
store.subscribe(()=> {
    //console.log(store.getState());
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
   console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 200, createdAt: -31000}));
const expenseTwo = store.dispatch(addExpense({description: 'Water Bill', amount: 400, createdAt: -2110}));
//store.dispatch(editExpense(expenseTwo.expense.id, {amount: 300}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
//store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByDate('date'));
 store.dispatch(sortByAmount('amount'));
// console.log(expenseOne);

// store.dispatch(startDate(125));
//store.dispatch(startDate(125));
// store.dispatch(endDate(1000));
const demoState = {
    expenses: [
        {
            id: 'rents1',
            description: 'January rent',
            note: 'This was The Final Payment I paid',
            amount: 560,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
    }
}

const Reducer = () => {
    return (
        <div>
            hello expensesReducer
        </div>
    )
}

export default Reducer;