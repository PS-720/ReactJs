import "./Feed.css";
import { Link } from "react-router-dom";
import moment from "moment";
import { useEffect, useState } from "react";
import { API_KEY, valueConverter } from "../../data";

const Feed = ({ category, refreshKey }) => {
	// Accept refreshKey prop
	const [data, setData] = useState([]);

	const fetchData = async () => {
		const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
		await fetch(videoList_url)
			.then((response) => response.json()) // Parse the JSON response
			.then((data) => {
				const shuffledItems = data.items.sort(() => Math.random() - 0.5); // Shuffle the array
				setData(shuffledItems); // Set the state with the shuffled items
			});
	};

	useEffect(() => {
		fetchData(); // This will run on initial mount and when category or refreshKey changes
	}, [category, refreshKey]); // Add refreshKey to dependencies

	return (
		<div className="feed">
			{data.map((item, index) => {
				return (
					<Link
						to={`video/${item.snippet.categoryId}/${item.id}`}
						className="card">
						<img
							src={
								item.snippet.thumbnails.maxres?.url ||
								item.snippet.thumbnails.standard?.url ||
								item.snippet.thumbnails.high?.url ||
								item.snippet.thumbnails.medium?.url
							}
							alt=""
						/>
						<h2>{item.snippet.title}</h2>
						<h3>
							{item.snippet.channelTitle} &bull; {""}{" "}
						</h3>
						<p>
							{valueConverter(item.statistics.viewCount)} views &bull; {""}
							{moment(item.snippet.publishedAt).fromNow()}
						</p>
					</Link>
				);
			})}
		</div>
	);
};

export default Feed;
