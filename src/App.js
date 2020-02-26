import React, { Component } from 'react'; 
import './App.css';
import Login from './components/Login'
import NewLead from './components/NewLead'
import { Button } from 'reactstrap';
import Lead_Dashboard from './components/Lead_Dashboard'


class App extends Component{  
  render(){
    return(
      <div className="App" >
       <Lead_Dashboard />
      {/*<Login/  */}  
      {/*<NewLead1 />*/} 
       </div>
    ); 
  }
}

export default App;
