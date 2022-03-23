import React, { useState, useEffect } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { debounce } from "../utilities/helper";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggle = () => setIsMenuOpen(!isMenuOpen);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;

		setVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 50) ||
				currentScrollPos < 10
		);

		setPrevScrollPos(currentScrollPos);
	}, 100);
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	return (
		<header>
			<div className={`navbar ${visible ? "active" : ""}`}>
				<div className="nav-wrapper">
					<div className="logo">
						<StaticImage
							src="../images/logo.png"
							alt="logo"
							width={140}
							height={60}
						/>{" "}
					</div>
					<div className="menu-btn" onClick={toggle}>
						<span
							className={`menu-btn__burger ${isMenuOpen ? "open" : ""}`}
						></span>
					</div>
				</div>

				<nav class={`nav ${isMenuOpen ? "open" : ""}`}>
					<ul
						class={`menu-nav ${isMenuOpen ? "open" : ""}`}
						onClick={() => {
							closeMenu();
						}}
					>
						<li class={`menu-nav__item ${isMenuOpen ? "open" : ""}`}>
							<AnchorLink className="nav-link" to="/#home" title="home">
								Home
							</AnchorLink>
						</li>

						<li class={`menu-nav__item ${isMenuOpen ? "open" : ""}`}>
							<AnchorLink className="nav-link" to="/#about" title="about">
								About us
							</AnchorLink>
						</li>

						<li class={`menu-nav__item ${isMenuOpen ? "open" : ""}`}>
							<AnchorLink className="nav-link" to="/#project" title="projects">
								Our portfolio
							</AnchorLink>
						</li>

						<li class={`menu-nav__item ${isMenuOpen ? "open" : ""}`}>
							<AnchorLink className="nav-link" to="/#contact" title="contact">
								Contacts
							</AnchorLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
