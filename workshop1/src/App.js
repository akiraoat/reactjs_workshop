import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './views/authentication/Signin';
import Signup from './views/authentication/Signup';

class App extends React.Component {
  render(){
    return(
      <Signup/>
    )
  }

}
export default App;