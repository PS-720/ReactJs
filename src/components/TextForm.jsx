import { useRef, useState } from "react";

const TextForm = (props) => {
	const [text, setText] = useState("");
	const originalText = useRef("");
	const textRef = useRef();

	const handleOnChange = (e) => {
		setText(e.target.value);
		originalText.current = e.target.value;
	};

	const toUpCase = () => {
		let newText = text.toUpperCase();
		setText(newText);
	};

	const restoreOriginalText = () => {
		setText(originalText.current);
	};

	const toLoCase = () => {
		let newText = text.toLowerCase();
		setText(newText);
	};

	const clearText = () => {
		let newText = "";
		setText(newText);
	};

	const copyText = async () => {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(text);
				return;
			}

			textRef.current.select();
			document.execCommand("copy");
		} catch (error) {
			console.error("Copy failed:", error);
		}
	};

	return (
		<>
			<div className="container">
				<div
					className="mb-3"
					style={{
						color: props.mode === "light" ? "black" : "white",
					}}>
					<h1>{props.heading}</h1>
					<textarea
						className={`form-control ${props.mode === "dark" ? "textarea-dark" : "textarea-light"}`}
						style={{
							backgroundColor:
								props.mode === "light" ? "#eaede5ac" : "#0000003c",
							color: "inherit",
						}}
						id="myBox"
						rows="8"
						value={text}
						placeholder="Enter text here: "
						ref={textRef}
						onChange={handleOnChange}></textarea>
				</div>
				<button onClick={toUpCase} className="btn btn-warning m-1">
					Convert to UpperCase
				</button>
				<button className="btn btn-warning m-1" onClick={restoreOriginalText}>
					Restore Original
				</button>
				<button onClick={toLoCase} className="btn btn-warning m-1">
					Convert to LowerCase
				</button>
				<button className="btn btn-warning m-1" onClick={clearText}>
					Remove All Text
				</button>
				<button className="btn btn-warning m-1" onClick={copyText}>
					Copy Text
				</button>
			</div>

			<div
				className="container my-3"
				style={{
					color: props.mode === "light" ? "black" : "white",
				}}>
				<h1>Your text summary</h1>
				<p>
					{text.trim() ? text.trim().split(/\s+/).length : 0} words{" "}
					{text.length} characters
				</p>
				<p>
					{(text.trim() ? text.trim().split(/\s+/).length : 0) * 0.008} minutes
					read
				</p>
				<h2>Preview: </h2>
				<p>
					{text.length > 0
						? text
						: "Enter something in the text-box to preview."}
				</p>
			</div>
		</>
	);
};

export default TextForm;
