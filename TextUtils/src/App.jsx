import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light");
	const [alert, setAlert] = useState(null);

	useEffect(() => {
		document.body.style.backgroundColor =
			mode === "light" ? "white" : "#041C41";
	}, [mode]);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};

	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#041C41";
			showAlert("Dark Mode Enabled", "success");
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light Mode Enabled", "success");
		}
	};

	return (
		<>
			{/* <Router> */}
				<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />
				<div className="container my-3">
					{/* <Routes>
						<Route
							exact path="/"
							element={ */}
								<TextForm heading="Enter the text to analyze" mode={mode} />
							{/* } */}
						{/* />
						<Route exact path="/about" element={<About mode={mode} />} />
					</Routes> */}
				</div>
			{/* </Router> */}
		</>
	);
}

export default App;
