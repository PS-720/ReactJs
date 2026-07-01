import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import save from "../../assets/save.svg";
import share from "../../assets/share.svg";
import more from "../../assets/more.svg";
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
	};

	const fetchChannelData = async () => {
		const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
		await fetch(channelData_url)
			.then((response) => response.json())
			.then((data) => setChannelData(data.items[0]));
	};

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
			<iframe
				src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen></iframe>
			<h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
			<div className="channel-stats flex-div">
				<div className="stats-left flex-div">
					<img
						className="channel-logo"
						src={
							channelData ? channelData.snippet.thumbnails.default.url : null
						}
						alt=""
					/>
					<div>
						<h2>{apiData ? apiData.snippet.channelTitle : "Channel Name"}</h2>
						<p>
							{channelData
								? valueConverter(channelData.statistics.subscriberCount)
								: "0"}{" "}
							Subscribers
						</p>
					</div>
					<button>Join</button>
					<button>Subscribe</button>
				</div>
				<div className="stats-right flex-div">
					<div className="like">
						<img src={like} alt="" />
						{valueConverter(apiData ? apiData.statistics.likeCount : 0)}
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
