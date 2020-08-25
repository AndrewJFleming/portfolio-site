import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  // Collapse handled with handler instead of bootstrap
  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  render() {
    const show = (this.state.menu) ? "show" : "" ;

    return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#202F5F"}}>
      <a className="navbar-brand" href="/"><img style={{maxWidth: "30px"}} src="assets/ajf-logo-192.png"/></a>
      <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }> 
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse " + show}>
        <div className="navbar-nav ml-auto">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" >
              {/* Links handled by react-router-dom instead of bootstrap */}
              <NavLink onClick={ this.toggleMenu } className="nav-link" exact to="/" activeClassName="active">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={ this.toggleMenu } className="nav-link" to="/about" activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={ this.toggleMenu } className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}