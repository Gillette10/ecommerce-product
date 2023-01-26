import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
	background-color: #fff;
	border-bottom: 1px solid #d1cfcf;
	padding: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	position: relative;

	@media (max-width: 540px) {
		border-bottom: none;
		z-index: 1;
		width: 90%;
		margin: 0 auto;
	}
	@media (max-width: 1024px) {
		/* border-bottom: 1px solid #d1cfcf;
		width: 90%;
		margin: 0 auto; */
		margin: 0 auto;
		width: 90%;
	}
`;

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: #000;
	position: relative;

	position: relative;
	&::before {
		content: "";
		position: absolute;
		left: 0;
		bottom: -26px;
		height: 0.2rem;
		width: 100%;
		background-color: hsl(26, 100%, 55%);
		opacity: 0;
		transition: all 0.3s ease-in-out;
	}
	&:hover::before {
		opacity: 1;
	}

	@media (max-width: 540px) {
		flex-grow: 2;
		margin-left: 0.8rem;
		font-weight: bold;
	}
`;

export const NavFlexContainer = styled.div`
	display: flex;
	flex-grow: 2;
	margin: 0 3rem;
	gap: 2rem;
	opacity: 0.8;

	@media (max-width: 540px) {
		display: none;
	}

	@media (max-width: 1024px) {
		gap: 1rem;
	}
`;

export const AvatarFlexContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	margin-right: 2rem;

	@media (max-width: 540px) {
		gap: 1rem;
		margin-right: 0;
	}
`;

export const AvatarImg = styled.img`
	width: 2.5rem;
	cursor: pointer;

	&:hover {
		border: 1px solid hsl(26, 100%, 55%);
		border-radius: 50%;
	}

	@media (max-width: 540px) {
		width: 1.8rem;
	}
`;
export const CartImg = styled.img`
	height: 1.5rem;
	cursor: pointer;

	@media (max-width: 540px) {
		height: 1.2rem;
	}
`;

export const StyledImg = styled.img`
	@media (max-width: 540px) {
		width: 100px;
	}
`;

export const Badge = styled.h6`
	position: absolute;
	right: 0;
	bottom: 0;

	background-color: hsl(26, 100%, 55%);
	color: white;
	border-radius: 50%;
	padding: 0.1rem 0.3rem;
	transform: translate(25%, -100%);
`;

export const HamburgerNavContainer = styled.nav`
	display: flex;
	gap: 1rem;
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
	margin-left: 0.9rem;
	background-color: white;
`;

export const NavHamburger = styled.div`
	@media (min-width: 541px) {
		display: none;
	}
`;
export const HamburgerOverLay = styled.div`
	@media (max-width: 540px) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.75);
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
