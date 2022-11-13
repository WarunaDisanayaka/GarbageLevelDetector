import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='App list-group-item justify-content-center
      aligh-items-center mx-auto' style={{"width":"400px",
      "backgroundColor":"white", "marginTop":"15px"}}>
        <h1 className="card text-white bg-primary mb-1"
        styleName="max-width: 20rem;">GARBAGE LEVEL DETECTOR</h1>
        <h6 className="card text-white bg-primary mb-3">
          USING FARM STACK</h6>
        <div className="card-body">
          <h5 className="card text-white bg-dark mb-3">Add A Garbage Bin</h5>
          <span className="card-text">
            <input className="mb-2 form-control idIn" placeholder="ID"/>
            <input className="mb-2 form-control desIn" placeholder="LEVEL"/>

            <button className="btn btn-outline-primary mx-2 mb-3" style={
            {'borderRadius':"50px", "font-weight":"bold"}}>Add Bin</button>
          </span>

          <h5 className="card text-white bg-dark mb-3">Your Bins</h5>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
