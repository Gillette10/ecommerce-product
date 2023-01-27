import myLogo from "../assets/logo.svg";
import Avatar from "../assets/image-avatar.png";
import {
	AvatarFlexContainer,
	AvatarImg,
	NavContainer,
	NavFlexContainer,
	StyledImg,
	StyledNavLink,
} from "../styles/NavBar.style";
import HamburgerMenu from "./HamburgerMenu";
import Modal from "./Modal";

const NavBar = () => {
	return (
		<NavContainer>
			<HamburgerMenu />
			<StyledNavLink to="/">
				<StyledImg src={myLogo} alt="logo" />
			</StyledNavLink>
			<NavFlexContainer>
				<StyledNavLink to="/collection">Collection</StyledNavLink>
				<StyledNavLink to="/men">Men</StyledNavLink>
				<StyledNavLink to="/women">Women</StyledNavLink>
				<StyledNavLink to="/about">About</StyledNavLink>
				<StyledNavLink to="/contact">Contact</StyledNavLink>
			</NavFlexContainer>
			<AvatarFlexContainer>
				<div>
					{/* modal components*/}
					<Modal />
				</div>
				<AvatarImg src={Avatar} alt="person" />
			</AvatarFlexContainer>
		</NavContainer>
	);
};

export default NavBar;
