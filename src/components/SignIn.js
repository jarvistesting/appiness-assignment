import React, { Component } from 'react';
import {loginAction} from '../store/actions/loginAction';
import { connect } from 'react-redux';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    isValid: true
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidation(this.state)) {
      this.props.loginSuccess(this.state);
    } else {
      this.setState({ isValid: false });
    }
  }

  handleValidation = ({email, password}) => {
    let formIsValid = true;
    if ((!email || !password)) {
      formIsValid = false;
    }
    if (!this.validateEmail(email)) {
      formIsValid = false;
    }
    if (formIsValid) {
      return true;
    }  
  }

  validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  render() {
    return (
      <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
                <i className="material-icons prefix">email</i>
                <label htmlFor="email">Username/Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <i className="material-icons prefix">lock_outline</i>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Login</button>
                <div className="red-text center">
                  {this.props.loginError ?  'Make sure Username and password are correct' : null}
                </div>
                <div className="red-text center">
                  {!this.state.isValid ?  'Invalid Email or Password' : null}
                </div>
            </div>
          </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loginError: state.logindata.loginError
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginSuccess: (creds) => dispatch(loginAction(creds, ownProps))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
