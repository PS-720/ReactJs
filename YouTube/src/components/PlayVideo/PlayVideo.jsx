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
import { API_KEY, valueConverter } from "../../data";
import { useEffect, useState } from "react";

const PlayVideo = ({ videoId }) => {

	const [apiData, setApiData] = useState(null);
	const [channelData, setChannelData] = useState(null);

	const fetchVideoData = async () => {
		const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
		await fetch(videoDetails_url)
			.then((response) => response.json())
			.then((data) => setApiData(data.items[0]));
	}

	const fetchChannelData = async () => {
		const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
		await fetch(channelData_url)
			.then((response) => response.json())
			.then((data) => setChannelData(data.items[0]));
	}

	useEffect(() => {
		fetchVideoData();
	}, [videoId]);

	useEffect(() => {
		if (apiData) {
			fetchChannelData();
		}
	}, [apiData]);

	return (
		<div className="play-video flex-div">
			{/* <video src={video1} controls autoPlay></video> */}
			<iframe
				src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen></iframe>
			<h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
			<div className="channel-stats flex-div">
				<div className="stats-left flex-div">
					<img className="channel-logo" src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
					<div>
						<h2>{apiData?apiData.snippet.channelTitle:"Channel Name"}</h2>
						<p>{channelData?valueConverter(channelData.statistics.subscriberCount):"0"} Subscribers</p>
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
					<div className="like">
						<img src={like} alt="" />
						{valueConverter(apiData?apiData.statistics.likeCount:0)}
					</div>
					<div className="dislike">
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
