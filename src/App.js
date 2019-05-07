import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from './components/SignIn';
import Dashboard from './dashboard/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" render={()=>(this.props.isLoggedIn ? (<Dashboard />) : (<Redirect to='/signin' />))}/>
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </BrowserRouter>   
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.logindata.isLoggedIn
  }
}

export default connect(mapStateToProps, null)(App);
