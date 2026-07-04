import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom"; // Keep this import

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HashRouter basename="/ReactJs/YouTube">
			<App />
		</HashRouter>
	</StrictMode>,
);
