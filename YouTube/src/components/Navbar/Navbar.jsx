import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu_icon.svg";
import logo from "../../assets/youtube-logo-icon.svg";
import search_icon from "../../assets/search_icon.svg";
import voice_search_icon from "../../assets/voice_search_icon.svg";
import notifications_icon from "../../assets/notifications_iocn.svg";
import profile_icon from "../../assets/profile_icon.svg";
import add_icon from "../../assets/add_icon.svg";

const Navbar = () => {
	return (
		<nav className="flex-div">
			<div className="nav-left flex-div">
				<img className="menu-icon" src={menu_icon} alt="Menu" />
				<img className="logo" src={logo} alt="Logo" />
			</div>

			<div className="nav-middle flex-div">
				<div className="search-box flex-div">
					<input type="search" placeholder="Search" />
					<img src={search_icon} alt="" />
				</div>
				<img src={voice_search_icon} alt="" />
			</div>

			<div className="nav-right flex-div">
				<button>
					<img src={add_icon} alt="" />
					Create
				</button>
				<img src={notifications_icon} alt="" />
				<img src={profile_icon} alt="" />
			</div>
		</nav>
	);
};

export default Navbar;
