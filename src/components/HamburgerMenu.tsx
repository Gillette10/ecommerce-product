import {
	HamburgerNavContainer,
	HamburgerOverLay,
	NavHamburger,
	StyledNavLink,
} from "../styles/NavBar.style";
import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const GlobalStyle = createGlobalStyle`
  .menu-open {
    transform: translateX(0);
  }
  .menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: #fff;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }
`;

interface Props {}

const HamburgerMenu: React.FC<Props> = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<GlobalStyle />
			<NavHamburger>
				<HiMenu onClick={() => setMenuOpen(true)} size={25} />
				{menuOpen && (
					<>
						<nav className={`menu ${menuOpen ? "menu-open" : ""}`}>
							<FaTimes
								onClick={() => setMenuOpen(false)}
								style={{ margin: "1.4rem 0 0 1.4rem" }}
								size={25}
							/>
							<HamburgerNavContainer>
								<StyledNavLink to="/collection">Collection</StyledNavLink>
								<StyledNavLink to="/men">Men</StyledNavLink>
								<StyledNavLink to="/women">Women</StyledNavLink>
								<StyledNavLink to="/about">About</StyledNavLink>
								<StyledNavLink to="/contact">Contact</StyledNavLink>
							</HamburgerNavContainer>
						</nav>
					</>
				)}
			</NavHamburger>
		</>
	);
};

export default HamburgerMenu;
