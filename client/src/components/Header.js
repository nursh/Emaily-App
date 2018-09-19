import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  renderContent() {
    const { auth } = this.props;
    switch(auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">
            <li>
              <a href="">{this.renderContent()}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
} 

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);