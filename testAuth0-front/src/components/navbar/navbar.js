import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { login, logout, isLoggedIn, getUser } from '../../utils';
import './navbar.css'

//	Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	showDropdown, 
	hideDropdown,
	showSpinner,
	hideSpinner
} from '../../redux/actions';

class NavbarComponent extends Component {
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
		//this.showMenu = !this.showMenu;
		console.log("toggling:", this.showMenu);
	}

	toggleDropdownMenu(){
		if(this.props.navDropdown.isDropdownShowing === ""){
			this.props.actions.showDropdown();
		}
		else {
			this.props.actions.hideDropdown();
		}
	}

	goToProfile(){
		this.props.actions.showSpinner();
		getUser()
			.then(res => {
				this.toggleDropdownMenu();
				console.log("USER:",res);
				this.props.actions.hideSpinner();
				browserHistory.push(`/profile/${res.id}`);
			})
			.catch(error => {
				this.props.actions.hideSpinner();				
				console.log("Error navigating to user: ",error);
			})
	}

	logoutUser(){
		this.props.actions.hideDropdown();
		logout();
	}

	loggedInMenu(){
		const {navDropdown} = this.props;
		return (
			<li className="loggedin-dropdown-menu">
				<a onClick={()=> this.toggleDropdownMenu()}>Menu<span className="arrow">&rarr;</span></a>
				<div className={'drop-down ' + navDropdown.isDropdownShowing}>
					<span onClick={()=>this.goToProfile()}>
						Profile
					</span>
					<span onClick={()=> this.logoutUser()}>
						Logout
					</span>
				</div>
			</li>
		);
	}

  render() {
    return (
			<nav className="navbar navbar-default" tabIndex="0" onBlur={this.props.actions.hideDropdown}>
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
							<li onClick={()=> this.second()}><a>Second</a></li>								
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

const Navbar = connect(state => ({
	navDropdown: state.navbarReducer
}), dispatch => ({
	actions: bindActionCreators({showDropdown, hideDropdown, showSpinner, hideSpinner}, dispatch)
}))( NavbarComponent );

export { Navbar };