import "./Recommended.css";
import { useEffect, useState } from "react";
import { API_KEY, valueConverter } from "../../data";
import moment from "moment";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
	const [apiData, setApiData] = useState([]);

	const fetchData = async () => {
		const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
		await fetch(relatedVideo_url)
			.then((res) => res.json())
			.then((data) => setApiData(data.items));
	};

	useEffect(() => {
		fetchData();
	}, [categoryId]);

	return (
		<div className="recommended-video">
			{apiData.map((item, index) => {
				return (
					<Link
						to={`/video/${item.snippet.categoryId}/${item.id}`}
						key={index}
						className="video-card">
						<img src={item.snippet.thumbnails.medium.url} alt="" />
						<div className="video-details">
							<h3>{item.snippet.title}</h3>
							<h2>{item.snippet.channelTitle}</h2>
							<p>
								{valueConverter(item.statistics.viewCount)} views &bull;{" "}
								{moment(item.snippet.publishedAt).fromNow()}
							</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Recommended;
