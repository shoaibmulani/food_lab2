//package
import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	const nav_container = useRef(null);
	let activeStyle = {
		textDecoration: "underline",
	};

	useEffect(() => {}, []);

	return (
		<header className="header">
			<div className="header__logo">
				<h1>
					<span1>FOOD</span1>
					<span2>LAB</span2>
				</h1>
			</div>
			<nav>
				<ul>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? "activeStyle" : undefined
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/menu"
							className={({ isActive }) =>
								isActive ? "activeStyle" : undefined
							}
						>
							Menu
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact-us"
							className={({ isActive }) =>
								isActive ? "activeStyle" : undefined
							}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
