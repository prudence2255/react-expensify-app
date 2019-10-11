

//expenses reducer
const expensesReducerDefaultState = []
export default (state = expensesReducerDefaultState, action) => {
            switch (action.type) {
                case "SET_EXPENSES": 
                return [
                    ...state,
                    ...action.expenses
                ]
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
