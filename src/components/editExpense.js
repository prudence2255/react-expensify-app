import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expenseForm';
import { editExpense, setRemoveExpense} from '../actions/expenses';



const EditExpensePage = (props) => {
console.log(props);
    return (
    <div>
        <ExpenseForm
        expense={props.expense}
            onSubmit={(expense)=>{
                //dispatch
              props.dispatch(editExpense(props.expense.id, expense));
              props.history.push('/')
            }}
        />
          <button onClick={() => {
           props.dispatch(setRemoveExpense({id: props.expense.id}));
           props.history.push('/');
            }}>Remove</button>
    </div>
    )
}
   const mapStateToProps = (state, props) => {
        return {
                expense: state.expenses.find((expense) => {
                    return expense.id === props.match.params.id;
                })
        }
   }

export default connect(mapStateToProps,)(EditExpensePage)