import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { login, logout, isLoggedIn, getUser } from '../../utils';
import './navbar.css'

class Navbar extends Component {
	showMenu = false;
	constructor(props){
		super(props)
		this.state = {
			isDropdownShowing: ""
		}
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

	toggleDropdownMenu(){
		let state = this.state.isDropdownShowing == ""? "show": "";
		this.setState({
			isDropdownShowing: state
		})
	}

	goToProfile(){
		console.log("Going to user");
		getUser()
			.then(res => {
				console.log("USER:",res);
				browserHistory.push(`/profile/${res.id}`);
			})
			.catch(error => {
				console.log("Error navigating to user: ",error);
			})
	}

	loggedInMenu(){
		return (
			<li className="loggedin-dropdown-menu">
				<a onClick={()=> this.toggleDropdownMenu()}>Menu<span className="arrow">&rarr;</span></a>
				<div className={'drop-down ' + this.state.isDropdownShowing}>
					<span onClick={()=>this.goToProfile()}>
						Profile
					</span>
					<span onClick={()=> logout()}>
						Logout
					</span>
				</div>
			</li>
		);
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
							<li onClick={()=>this.second()}><a>Second</a></li>								
						</ul>
						
						<ul className="nav navbar-nav navbar-right">
							{
								isLoggedIn() ?
									this.loggedInMenu()
									:<li onClick={()=>login()}><a>Login</a></li>
							}
						</ul>
					</div>
				</div>
			</nav>
    );
  }
}

export { Navbar };