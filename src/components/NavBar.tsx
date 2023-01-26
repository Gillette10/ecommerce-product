import myLogo from "../assets/icons/logo.svg";
import Avatar from "../assets/imgs/image-avatar.png";
import Cart from "../assets/icons/icon-cart.svg";
import {
	AvatarFlexContainer,
	AvatarImg,
	Badge,
	CartImg,
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
