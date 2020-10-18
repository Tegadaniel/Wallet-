import React, { Component } from 'react'
import Output from '../Output/Output'

 class Input extends Component {
   constructor(props){
     super(props);
     this.state = {
      amount : "",
      currentAmount: "",
      expenseCost: "",
      showButton1: true,
      showButton2: false,
      showButton3: false
     }
   }

   handleChanged = (evt) => {
    this.setState({[evt.target.name]: evt.target.value}) 
   }

   handleCalculate = (evt) => {
     evt.preventDefault()
     const {amount} = this.state
      this.setState({
      currentAmount: amount,
      amount: " ",
      showButton1: false,
      showButton2: true,
      showButton3: true
    })
    console.log(this.state)
   }
   handleAdd = (evt) =>{
    evt.preventDefault();
    const {amount, currentAmount} = this.state
    const sum = Number.parseInt(amount) +  Number.parseInt(currentAmount);
    this.setState({
     currentAmount: sum 
    })
  }

  handleClicked = (evt) =>{
    evt.preventDefault()
    const {expenseCost, currentAmount} = this.state
    const sum = Number.parseInt(currentAmount) - Number.parseInt(expenseCost)
    this.setState({
      currentAmount:sum
    })
  }


  render() {
    const { currentAmount, expenseCost } = this.state
    let clicking = null
    if(this.state.showButton1){
      clicking = <button 
      type = "submit"
     className = "  btn btn-primary  border-3 text-capitalize" >
       calculate Money
     </button>
    }else{
      clicking = <button 
      type = "submit"
     className = "  btn btn-primary  border-3 text-capitalize" disabled>
       calculate Money
     </button>
    }
    let clicking2 = null;
    if(this.state.showButton2){
      clicking2 = <button 
           onClick = {this.handleAdd}
           className = "btn btn-primary  border-3 text-capitalize">
           
           Add Money
         </button>
    }else{
      clicking2 = <button 
           onClick = {this.handleAdd}
           className = "btn btn-primary  border-3 text-capitalize" disabled>
           
           Add Money
         </button>
    }


    let clicking3 = null;
    if(this.state.showButton3){
      clicking3 = <button  
      type = "submit"
      className = "btn btn-primary  border-3 text-capitalize">
        calculate
      </button>
    }else{
      clicking3 = <button  
      type = "submit"
      className = "btn btn-primary  border-3 text-capitalize" disabled>
        calculate
      </button>
    }

    return (
    
     
         <div className = "row">
         <div className="col-md-5 my-3">
         <h4 className="alert alert-info text-capitalize" role="alert">
           wallet app
         </h4>
      
           <h5 className = "text-capitalize">
             please enter amount in wallet
           </h5>
           <form onSubmit = {this.handleCalculate}>
           <div className="form-group">
           
             <input type ="number" 
             className = "form-control"
             name = "amount"
             value = {this.state.amount} 
             onChange = {this.handleChanged}
              required
             />
           </div>

            {clicking }

           {" "} {" "} 
           
           {clicking2}

        </form>
         <br/>   
        <br/>

        <h4 className="alert alert-info text-capitalize" role="alert">
           wallet
         </h4>
         
         <form onSubmit={this.handleClicked}>
         <div className = "form-group">
         <h4 className = "text-capitalize">please enter amount spent</h4>
           <input type = "number" name = "expenseCost" 
            onChange = {this.handleChanged}
            value = {this.state.expenseCost} className = "form-control" required/>
         </div>

         {clicking3}
         </form>
         </div>
         
        <Output
          currentAmount = {currentAmount}
          expenseCost = {expenseCost}
        />
        </div>


      
     
    )
  }
}

export default Input
