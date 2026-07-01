import React from "react";
import "./Sidebar.css";
import home from "../../assets/home_icon.svg";
import shorts from "../../assets/yt_shorts.svg";
import subscription from "../../assets/subscriptions_icon.svg";
import user from "../../assets/profile_icon.svg";
import greaterThan from "../../assets/gt.svg";
import greatStack from "../../assets/great_stack.png";
import chaiCode from "../../assets/chai_aur_code.png";
import takeUForward from "../../assets/take_you_forward.png";
import codeHelp from "../../assets/code_help.png";
import codeWithHarry from "../../assets/code_with_harry.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
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
					<p>
						Subscriptions
						<img
							className="greater-than-icon"
							style={{ width: "12px", marginLeft: "10px" }}
							src={greaterThan}
							alt=""
						/>
					</p>
					<div className="subscription-list">
						<div className="side-link">
							<img src={greatStack} alt="" />
							<p>Great Stack</p>
						</div>
						<div className="side-link">
							<img src={chaiCode} alt="" />
							<p>Chai Aur Code</p>
						</div>
						<div className="side-link">
							<img src={takeUForward} alt="" />
							<p>Take You Forward</p>
						</div>
						<div className="side-link">
							<img src={codeHelp} alt="" />
							<p>Code Help</p>
						</div>
						<div className="side-link">
							<img src={codeWithHarry} alt="" />
							<p>Code With Harry</p>
						</div>
					</div>
				</div>
				<hr />
				<div className="side-link user">
					<img className="user-icon" src={user} alt="" />
					<p>
						You
						<img
							className="greater-than-icon"
							style={{ width: "12px", marginLeft: "10px" }}
							src={greaterThan}
							alt=""
						/>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
