import React from "react";
import "./Sidebar.css";
import home from "../../assets/home_icon.svg";
import shorts from "../../assets/yt_shorts.svg";
import subscription from "../../assets/subscriptions_icon.svg";
import user from "../../assets/profile_icon.svg";
import greaterThan from "../../assets/gt.svg"

const Sidebar = ({ sidebar }) => {
	return (
		<div className={`sidebar ${sidebar === true ? "" : "small-sidebar"} `}>
			<div className="shortcut-links">
				<div className="side-link">
					<img src={home} alt="" />
					<p>Home</p>
				</div>
				<div className="side-link">
					<img src={shorts} alt="" />
					<p>Shorts</p>
				</div>
				<hr />
				<div className="side-link subscriptions">
					<img className="subscription-icon" src={subscription} alt="" />
          <p>Subscriptions
            <img className="greater-than-icon" style={{width: "12px", marginLeft: "10px"}} src={greaterThan} alt="" />
          </p>
					<div className="subscription-list">
						<div className="side-link">
							<img src={user} alt="" />
							<p>Great Stack</p>
						</div>
						<div className="side-link">
							<img src={user} alt="" />
							<p>Chai Aur Code</p>
						</div>
						<div className="side-link">
							<img src={user} alt="" />
							<p>Take You Forward</p>
						</div>
						<div className="side-link">
							<img src={user} alt="" />
							<p>Code Help</p>
						</div>
						<div className="side-link">
							<img src={user} alt="" />
							<p>Code With Harry</p>
						</div>
					</div>
				</div>
				<hr />
				<div className="side-link">
					<img src={user} alt="" />
					<p>You</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
