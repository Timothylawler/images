import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { login, logout, isLoggedIn } from '../../utils';
import './style.css'

class Navbar extends Component {
	showMenu = false;
	constructor(props){
		super(props)
	}

	first(){
		browserHistory.push("/");
	}

	second(){
		browserHistory.push("/second");
	}

	toggleMenu(){
		this.showMenu = !this.showMenu;
		console.log("toggling:", this.showMenu);
	}

  render() {
    return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" onClick={()=>this.toggleMenu()}>
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">Brand</a>
					</div>
					<div className={"navbar-collapse " + (this.showMenu? 'show':'collapse')} >
						<ul className="nav navbar-nav navbar-left" >
							<li onClick={()=> this.first()}><a>First</a></li>
							{
								isLoggedIn()&&
									<li onClick={()=>this.second()}><a>Second</a></li>								
							}
						</ul>
						
						<ul className="nav navbar-nav navbar-right">
							{
								isLoggedIn() ?
									<li onClick={()=>logout()}><a>Logout</a></li>
									:<li onClick={()=>login()}><a>Login</a></li>
							}
						</ul>
					</div>
				</div>
			</nav>
      /*<nav classNameName="navbar">
				<div className="brand" onClick={()=>this.first()}><span >asd</span></div>
				<div className="menu-content"> 
					<ul className="menu-items">
						<li>
							<button className="menu-item" onClick={()=>this.first()}>First</button>
						</li>
							{
								isLoggedIn() &&
								<li>
									<button className="menu-item" onClick={()=>this.second()}>Second</button>
								</li>
							}
					</ul>
					<ul className="login-wrapper">
						<li>
							{
								!isLoggedIn() &&
									<button 
										className="positive" 
										onClick={()=>login()}
									>Log In</button>
							}
						</li>
						<li>
							{
								isLoggedIn() &&
									<button 
										className="negative"
										onClick={()=>logout()}
									>Log out</button>
							}
						</li>
					</ul>
				</div>
      </nav>*/
    );
  }
}

export { Navbar };