import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';




class ExpenseForm extends React.Component {
     constructor(props){
         super(props)
         this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            error: '',
        }

     }
        onChangeDescription = (e) => {
                const description = e.target.value;
                this.setState(() => ({description}))
        }
        onChangeNote = (e) => {
            const note = e.target.value;
            this.setState(() => ({note}))
        }
        onAmountChange = (e) => {
            const amount = e.target.value;
            if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
                this.setState(() => ({amount}))
            }
           
        }
        onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt}))
        }
        }
        onFocusChange = ({focused}) => {
            this.setState(() => ({focused}))
        }
        onSubmit = e => {
            e.preventDefault();
            if (!this.state.description || !this.state.amount){
                //set error state
                this.setState(() => ({
                    error: 'Please provide description and amount',
                }))
            }else{ 
                this.props.onSubmit({
                    description: this.state.description,
                    amount: parseInt(this.state.amount, 10) * 100,
                    createdAt: this.state.createdAt.valueOf(),
                    note: this.state.note,
                });
                this.setState(() => ({
                    error: ''
                }))
            }
        }
    render() {
        return (
            <div>
               <div className="container">
               <form onSubmit={this.onSubmit} className="col-8 mx-auto">
                {this.state.error && (
                    <p>{this.state.error}</p>
                )} 
                   <input type="text" placeholder="Description"
                       autoFocus className="form-control"
                       value={this.state.description}
                       onChange={this.onChangeDescription}
                   />
                   <input type="text"
                       placeholder="Amount"
                       className="form-control"
                       value={this.state.amount}
                       onChange={this.onAmountChange}
                   />
                   <SingleDatePicker 
                       date={this.state.createdAt}
                       onDateChange={this.onDateChange}
                       focused={this.state.focused}
                       onFocusChange={this.onFocusChange}
                       numberOfMonths={1}
                       isOutsideRange={()=> false}
                   />
                   <textarea className="form-control"
                     value={this.state.note}
                   onChange={this.onChangeNote}
                   placeholder="Add a not for your expense (optional)"></textarea>
                   <button className="btn btn-primary">Add Expense</button>
               </form>
               </div>
            </div>
        )
    }
}


export default ExpenseForm;