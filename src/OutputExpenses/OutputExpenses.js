import React from 'react'

const OutputExpenses = (props) => {

    return (
      <>
         <div className = "col-md-7 my-3">
         <div className = "expense-list">
           <div className = "d-flex justify-content-between text-capitalize">
           <h5 className="list-item">expense title</h5>
           <ul class="list-group">
           <li class="list-group-item">{props.onText}</li>
           </ul>

           <h5 className="list-item">expense value</h5>
           <ul className="list-group">
           <li className="list-group-item">{props.onCost}</li>
           </ul>
           </div>
         </div>
        
        </div>
      </>
     
    )
  }


export default OutputExpenses
