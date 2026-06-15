import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
	const [mode, setMode] = useState("dark");
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
			<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
			<Alert alert={alert} />
			<div className="container my-3">
				<TextForm heading="Enter the text to analyze" mode={mode} />
				<About mode={mode} />
			</div>
		</>
	);
}

export default App;
