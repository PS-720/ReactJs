import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu_icon.svg";
import logo from "../../assets/yt_logo.png";
import search_icon from "../../assets/search_icon.svg";
import voice_search_icon from "../../assets/voice_search_icon.svg";
import notifications_icon from "../../assets/notifications_iocn.svg";
import profile_icon from "../../assets/profile_icon.svg";
import add_icon from "../../assets/add_icon.svg";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar, triggerFeedShuffle }) => { // Accept triggerFeedShuffle prop
	const handleLogoClick = () => {
		// The Link component handles navigation to "/"
		// We want to force a re-fetch/shuffle when the home page is loaded/reloaded via logo click
		triggerFeedShuffle();
	};

	return (
		<nav className="flex-div">
			<div className="nav-left flex-div">
				<img className="menu-icon" src={menu_icon} alt="Menu" onClick={() => setSidebar((prev) => !prev)} />
				<Link to="/" onClick={handleLogoClick}> {/* Add onClick handler */}
					<img className="logo-icon" src={logo} alt="Logo" />
				</Link>
			</div>

			<div className="nav-middle flex-div">
				<div className="search-box flex-div">
					<input type="search" placeholder="Search" />
				</div>
				<img className="search-icon" src={search_icon} alt="" />
				<img className="voice-search-icon" src={voice_search_icon} alt="" />
			</div>

			<div className="nav-right flex-div">
				<button className="flex-div">
					<img src={add_icon} alt="" />
					Create
				</button>
				<img className="notifications-icon" src={notifications_icon} alt="" />
				<img className="user-icon" src={profile_icon} alt="" />
			</div>
		</nav>
	);
};

export default Navbar;
