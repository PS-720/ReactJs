import React from 'react'
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home.jsx";
import Video from "./Pages/Video/Video.jsx";

const App = () => {
  return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/video/:categoryId/:videoId" element={<Video />} />
			</Routes>
		</div>
	);
}

export default App