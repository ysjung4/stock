import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  handleChange = e => {
    let value = e.target.value;
    console.log(value);
  };

  render() {
    return (
      <>
        <div id="add" className="btn-sm">
          <Link to="/login">login</Link>
        </div>
        <form>
          <h3>Sign In</h3>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>

          <p className="forgot-password text-right">
            Forgot <Link to="#">password?</Link>
          </p>
        </form>
      </>
    );
  }
}
export default Login;
