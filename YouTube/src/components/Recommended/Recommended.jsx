import "./Recommended.css";
import thumbnail from "../../assets/DB08.jpg";

const Recommended = ({categoryId}) => {
	return (
		<div className="recommended-video">
			<div className="video-card">
				<img src={thumbnail} alt="" />
				<div className="video-details">
					<h3>
						Title Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					</h3>
          <h2>Chai Aur Code</h2>
          <p>15K views &bull; 22 hours ago</p>
				</div>
			</div>
			<div className="video-card">
				<img src={thumbnail} alt="" />
				<div className="video-details">
					<h3>
						Title Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					</h3>
          <h2>Chai Aur Code</h2>
          <p>15K views &bull; 22 hours ago</p>
				</div>
			</div>
			<div className="video-card">
				<img src={thumbnail} alt="" />
				<div className="video-details">
					<h3>
						Title Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					</h3>
          <h2>Chai Aur Code</h2>
          <p>15K views &bull; 22 hours ago</p>
				</div>
			</div>
			<div className="video-card">
				<img src={thumbnail} alt="" />
				<div className="video-details">
					<h3>
						Title Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					</h3>
          <h2>Chai Aur Code</h2>
          <p>15K views &bull; 22 hours ago</p>
				</div>
			</div>
			<div className="video-card">
				<img src={thumbnail} alt="" />
				<div className="video-details">
					<h3>
						Title Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					</h3>
          <h2>Chai Aur Code</h2>
          <p>15K views &bull; 22 hours ago</p>
				</div>
			</div>
			<div className="video-card">
				<img src={thumbnail} alt="" />
				<div className="video-details">
					<h3>
						Title Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					</h3>
          <h2>Chai Aur Code</h2>
          <p>15K views &bull; 22 hours ago</p>
				</div>
			</div>
		</div>
	);
};

export default Recommended;
