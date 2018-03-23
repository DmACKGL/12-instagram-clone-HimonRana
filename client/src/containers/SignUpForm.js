import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/registerUser";
import { withRouter } from 'react-router-dom';

import "./SignUpForm.css";

export class SignUpForm extends Component {
  
	constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
		
    }
    

    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
	

	// handleSubmit() {}
	handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(registerUser(this.state)).then(() => {
      this.props.history.push('/signin');
    });
    /*
		const name  = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name,
				email,
				password
      })
		}
    console.log(options)
    
		const request = new Request('/auth/register', options);

		fetch(request)
		.then(res => res.json())
		.then(res => console.log(res))
			*/
  }
  
 


  

  render() {
    const { isAuthenticating } = this.props;
    return (
      <div className="signUpDiv">
        <div className="signUpBox">
          <img src="https://api.adorable.io/avatars/100/bulle@adorable.png" className="userAvatar" />
          <form className="SignUpForm__root" onSubmit={this.handleSubmit.bind(this)}>
            <fieldset>
              <h2>Register here</h2>
              <input onChange={this.handleChange.bind(this)}
                type="text"
                placeholder="Name"
                className="name"
                name="name"
                required
              />
            </fieldset>
            <fieldset>
              <input onChange={this.handleChange.bind(this)}
                type="text"
                placeholder="Email"
                className="email"
                name="email"
                required
              />
            </fieldset>
            <fieldset>
              <input onChange={this.handleChange.bind(this)}
                type="password"
                placeholder="Password"
                className="password"
                name="password"
                required
              />
            </fieldset>
            <button
              className="btn btn-primary"
              disabled={isAuthenticating}
              type="submit"
            >
              {isAuthenticating ? (
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw SignUpForm__spinner" />
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div> 
      </div>
    );
  }
}

/*const mapStateToProps = state => ({
  isAuthenticating: state.isAuthenticating
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
*/
export default withRouter(connect(null)(SignUpForm));