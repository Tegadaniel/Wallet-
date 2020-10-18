import React from 'react';
import Input from './Input/Input'
import './App.css';


function App() {
  return (
  <>
    <div className="container-fluid">
     <div className="row">
      <div className ="col-11 mx-auto pt-3">

        <h3 className ="text-uppercase mb-4 text-center">
          my wallet <i className="fas fa-wallet"></i>
        </h3>
        <Input/>
      </div>
     </div>
     </div>

    
  </>
    
  );
}

export default App;
