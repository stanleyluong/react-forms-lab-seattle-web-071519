import React from "react";
import {throws} from 'assert'
class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange = (event) => {
    let userName = event.target.value
    this.setState(prevState => {
      return {
        username: userName,
        password: prevState.password
      }
    })
  }

  handlePasswordChange = (event) => {
    let passWord = event.target.value
    this.setState(prevState => {
      return {
        password: passWord,
        username: prevState.username
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let pw = this.state.password
    let user = this.state.username
    if (pw !== "" && user !== "" ) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.value} onChange={this.handlePasswordChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
