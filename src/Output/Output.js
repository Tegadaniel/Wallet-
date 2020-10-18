import React from 'react'

 const Output = (props) => {
 
    return (


      <div className = "col-md-7">
        <div className = "row my-3">
        {/* Wallet */}
          <div className = "col-4 text-center mb-2">
            <h5 className = "text-uppercase info-title">wallet</h5>
            <span className="budget-icon">
              <i className = "fas fa-money-bill-alt fa-2x"  aria-hidden="true"></i>
            </span>
            <h4 className = "text-uppercase mt-2">
              <span>N {" "} </span>
              <span >{props.currentAmount}</span>
            </h4>
          </div>

          {/* Expenses */}
          <div className = "col-4 text-center mb-2">
            <h5 className = "text-uppercase info-title">expenses</h5>
            <span className="expense-icon">
              <i className = "far fa-credit-card fa-2x"  aria-hidden="true"></i>
            </span>
            <h4 className = "text-uppercase mt-2">
              <span>N {" "} </span>
              <span >{props.expenseCost}</span>
            </h4>
          </div>

          {/* Balance */}
          <div className = "col-4 text-center">
            <h5 className = "text-uppercase info-title">balance</h5>
            <span className="balance-icon">
              <h5>N </h5>
            </span>
            <h4 className = "text-uppercase">
              <span>N {props.currentAmount} </span>
             
            </h4>
          </div>

        </div>

        </div>
        
      

    )
  }

export default Output
