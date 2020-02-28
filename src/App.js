import React, { Component } from 'react'; 
import './App.css';
import Login from './components/Login'
import NewLead from './components/NewLead'
import { Button } from 'reactstrap';
import LeadBoard from './components/Modals/LeadBoard'
import Modalconductor from './components/Modals/ModalConductor';

class App extends Component{  
  render(){
    return(
      <div className="App" >
      {/*<Lead_Dashboard />*/}
      {/*<Login/  */}   
      <NewLead />
      {/*<LeadBoard />*/} 
       </div>
    ); 
  }
}

export default App;
