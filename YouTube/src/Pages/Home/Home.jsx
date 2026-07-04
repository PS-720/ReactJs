import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";

const Home = ({ sidebar, refreshKey }) => {
	// Accept refreshKey prop
	const [category, setCategory] = useState(0);
	return (
		<>
			<Sidebar
				sidebar={sidebar}
				category={category}
				setCategory={setCategory}
			/>
			<div className={`container ${sidebar === true ? "" : "large-container"}`}>
				<Feed category={category} refreshKey={refreshKey} />{" "}
				{/* Pass refreshKey */}
			</div>
		</>
	);
};

export default Home;
