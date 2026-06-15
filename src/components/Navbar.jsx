import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
	return (
		<>
			<nav
				className={`navbar py-3 px-3 navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						{props.title}
					</a>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
						</ul>

						<form className="d-flex" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button
								className={`btn me-2 btn-${props.mode === "light" ? "dark" : "light"}`}
								type="submit">
								Search
							</button>
						</form>
						<div className="form-check form-switch my-2">
							<input
								className="form-check-input"
								type="checkbox"
								role="switch"
								id="switchCheckDefault"
								onClick={props.toggleMode}
							/>
							<label
								className={`form-check-label text-${props.mode === "light" ? "dark" : "white"}`}
								htmlFor="switchCheckDefault">
								Switch Mode
							</label>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};
