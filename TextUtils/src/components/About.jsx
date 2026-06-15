import React, { useState } from "react";

const About = (props) => {
	const [btntext, setBtntext] = useState("Enable Dark Mode");

	// Commented code is to change theme for About section from this file only

	// const [myStyle, setMyStyle] = useState({
	// 	color: "black",
	// 	backgroundColor: "white",
	// });

	// const toggleThemeMode = () => {
	// 	if (myStyle.color === "#e1e1e1") {
	// 		setMyStyle({
	// 			color: "black",
	// 			backgroundColor: "white",
	// 		});
	// 		setBtntext("Enable Dark Mode");
	// 	} else {
	// 		setMyStyle({
	// 			color: "#e1e1e1",
	// 			backgroundColor: "#041C41",
	// 			border: "1px solid #e1e1e1",
	// 		});
	// 		setBtntext("Enable Light Mode");
	// 	}
	// };

	return (
		<div
			// className="container style={myStyle} "
			className="container"
			style={{
				color: props.mode === "light" ? "black" : "white",
			}}>
			<h1 className="my-3">About Us</h1>
			<div
				className="accordion"
				id="accordionExample"
				// style={{
				// 	backgroundColor: props.mode === "light" ? "white" : "#0000004c",
				// 	color: "inherit",
			// }}
			>
				<div
					className="accordion-item"
					style={{
						backgroundColor: props.mode === "light" ? "#eef0fd88" : "#0000001a",
						color: "inherit",
				}}
				>
					<h2
						className="accordion-header"
						style={{
							backgroundColor: "inherit",
							color: "inherit",
						}}>
						<button
							className="accordion-button"
							// style={myStyle}
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
							style={{
								color: "inherit",
								backgroundColor: "inherit",
							}}>
							Accordion Item #1
						</button>
					</h2>
					<div
						id="collapseOne"
						// style={myStyle}
						style={{
							backgroundColor: props.mode === "light" ? "#fff" : "inherit",
						}}
						className="accordion-collapse collapse show"
						data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>This is the first item’s accordion body.</strong> It is
							shown by default, until the collapse plugin adds the appropriate
							classes that we use to style each element. These classes control
							the overall appearance, as well as the showing and hiding via CSS
							transitions. You can modify any of this with custom CSS or
							overriding our default variables. It’s also worth noting that just
							about any HTML can go within the <code>.accordion-body</code>,
							though the transition does limit overflow.
						</div>
					</div>
				</div>

				<div
					className="accordion-item"
					style={{
						backgroundColor: props.mode === "light" ? "#eef0fd88" : "#0000001a",
						color: "inherit",
					}}>
					<h2
						className="accordion-header"
						style={{
							backgroundColor: "inherit",
							color: "inherit",
						}}>
						<button
							// style={myStyle}
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
							style={{
								backgroundColor: "inherit",
								color: "inherit",
							}}>
							Accordion Item #2
						</button>
					</h2>
					<div
						// style={myStyle}
						style={{
							backgroundColor: props.mode === "light" ? "#fff" : "inherit",
						}}
						id="collapseTwo"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>This is the second item’s accordion body.</strong> It is
							hidden by default, until the collapse plugin adds the appropriate
							classes that we use to style each element. These classes control
							the overall appearance, as well as the showing and hiding via CSS
							transitions. You can modify any of this with custom CSS or
							overriding our default variables. It’s also worth noting that just
							about any HTML can go within the <code>.accordion-body</code>,
							though the transition does limit overflow.
						</div>
					</div>
				</div>

				<div
					className="accordion-item"
					style={{
						backgroundColor: props.mode === "light" ? "#eef0fd88" : "#0000001a",
						color: "inherit",
					}}>
					<h2
						className="accordion-header"
						style={{
							backgroundColor: "inherit",
							color: "inherit",
						}}>
						<button
							// style={myStyle}
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
							style={{
								backgroundColor: "inherit",
								color: "inherit",
							}}>
							Accordion Item #3
						</button>
					</h2>
					<div
						// style={myStyle}
						style={{
							backgroundColor: (props.mode === 'light') ? "#fff" : "inherit",
						}}
						id="collapseThree"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>This is the third item’s accordion body.</strong> It is
							hidden by default, until the collapse plugin adds the appropriate
							classes that we use to style each element. These classes control
							the overall appearance, as well as the showing and hiding via CSS
							transitions. You can modify any of this with custom CSS or
							overriding our default variables. It’s also worth noting that just
							about any HTML can go within the <code>.accordion-body</code>,
							though the transition does limit overflow.
						</div>
					</div>
				</div>
			</div>
			{/* <div className="container">
				<button
					onClick={toggleThemeMode}
					type="button"
					className={`btn ${myStyle.color === "#e1e1e1" ? "btn-light" : "btn-dark"} my-3`}>
					{btntext}
				</button>
			</div> */}
		</div>
	);
};

export default About;
