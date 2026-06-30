import "./PlayVideo.css";
import video1 from "../../assets/video1.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import save from "../../assets/save.svg";
import share from "../../assets/share.svg";
import userProfile from "../../assets/profile_icon.svg";
import notifications from "../../assets/notifications_iocn.svg";
import greaterThan from "../../assets/gt.svg";
import greatStack from "../../assets/great_stack.png";
import more from "../../assets/more.svg"

const PlayVideo = () => {
	return (
		<div className="play-video flex-div">
			<video src={video1} controls autoPlay></video>
			<h3>Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2026</h3>
			<div className="channel-stats flex-div">
				<div className="stats-left flex-div">
					<img className="channel-logo" src={greatStack} alt="" />
					<div>
						<h2>Great Stack</h2>
						<p>1M Subscribers</p>
					</div>
					<button>Join</button>
					<button>Subscribe</button>
					{/* <div className="notification-icon flex-div">
						<img src={notifications} alt="" />
						<img
							className="greater-than-icon"
							style={{ width: "12px", marginLeft: "10px" }}
							src={greaterThan}
							alt=""
						/>
					</div> */}
				</div>
				<div className="stats-right flex-div">
					<div>
            <img src={like} alt="" />5K
            <p>|</p>
						<img src={dislike} alt="" />
					</div>
					<div>
						<img src={share} alt="" /> Share
					</div>
					<div>
						<img src={save} alt="" /> Save
					</div>
          <img className="more-icon" src={more} alt="" />
				</div>
			</div>
		</div>
	);
};

export default PlayVideo;
