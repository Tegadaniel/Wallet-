import React, { Component } from 'react'
import OutputExpenses from '../OutputExpenses/OutputExpenses'

 class InputExpenses extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        expenseText: "",
        expenseCost: ""
     }
   }
   handleChanged = (evt) =>{
     this.setState({ [evt.target.name]: evt.target.value})
   }

   handleClicked = (evt) =>{
     evt.preventDefault()
    this.setState({
      expenseText: "",
      expenseCost: ""
    })
   }
   
  render() {
    const { expenseText, expenseCost} = this.state
    return (

        <div className = "row">
         <div className="col-md-5 my-3">
         <h4 className="alert alert-info text-capitalize" role="alert">
           budget
         </h4>

         <div className = "form-group">
         <h4 className = "text-capitalize">what you spent money on </h4>
           <input type = "text" name = "expenseText" onChange = {this.handleChanged} 
           value = {this.state.expensesText} className = "form-control"/>
         </div>

         <div className = "form-group">
         <h4 className = "text-capitalize">please enter amount spent</h4>
           <input type = "number" name = "expenseCost" onChange = {this.handleChanged}
            value = {this.state.expensesCost} className = "form-control"/>
         </div>

         <button onClick={this.handleClicked} 
         type = "submit"
         className = "btn btn-primary  border-3 text-capitalize">
           submit
         </button>
         </div>
         <OutputExpenses onText = {expenseText} onCost = {expenseCost}/>
         </div>

    )
  }
}

export default InputExpenses
