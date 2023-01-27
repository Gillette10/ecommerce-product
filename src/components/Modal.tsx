import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Badge, CartImg } from "../styles/NavBar.style";
import Cart from "../assets/icon-cart.svg";
import { useCart } from "../context/ShoppingCartContext";
import {
	ModalButton,
	ModalContentContainer,
	ModalPrice,
	ModalProductName,
	ModalThumbnail,
	ModalTitle,
	ModalTotalAmount,
} from "../styles/Modal.style";
import Image from "../assets/image-product-2.jpg";
import { formatCurrency } from "../utilities/formatCurrency";
import { AiFillDelete } from "react-icons/ai";

interface Props {}

const ModalWrapper = styled.div`
	background-color: white;
	box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.2);
	width: 300px;
	height: 200px;
	position: absolute;
	right: 0.5rem;
	top: 4rem;
	display: flex;
	flex-direction: column;
	border-radius: 10px;

	@media (max-width: 425px) {
		width: 95%;
		height: 200px;
		margin-top: 0.5rem;
	}
`;

const IconWrapper = styled.div`
	&:hover ${ModalWrapper} {
	}
`;

const Modal: React.FC<Props> = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { cartItems, removeFromCart } = useCart();
	const [isMobile, setIsMobile] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClick);
		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, [modalRef]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const userAgent = window.navigator.userAgent;
			const mobile =
				/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
					userAgent,
				);
			setIsMobile(mobile);
		}
	}, []);

	const handleMouseEnter = () => {
		setIsOpen(true);
	};

	const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
		if (
			modalRef.current &&
			!modalRef.current.contains(event.relatedTarget as Node)
		) {
			setIsOpen(false);
		}
	};

	const handleClick = () => {
		// open modal
		setIsOpen(true);
	};

	return (
		<IconWrapper>
			<div
				style={{ position: "relative" }}
				onClick={isMobile ? handleClick : undefined}
				onMouseEnter={!isMobile ? handleMouseEnter : undefined}
			>
				<CartImg
					src={Cart}
					alt="cart-img"
					onMouseEnter={handleMouseEnter}
					// onMouseLeave={handleMouseLeave}
				/>
				{cartItems === 0 ? "" : <Badge>{cartItems}</Badge>}
			</div>

			{isOpen &&
				(cartItems === 0 ? (
					<>
						<ModalWrapper
							ref={modalRef}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<ModalTitle>Cart</ModalTitle>
							<ModalContentContainer style={{ paddingTop: "3rem" }}>
								Your cart is empty
							</ModalContentContainer>
						</ModalWrapper>
					</>
				) : (
					<ModalWrapper
						ref={modalRef}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<ModalTitle>Cart</ModalTitle>
						<ModalContentContainer>
							<ModalThumbnail
								src={Image}
								alt="Carousel Image"
								style={{ margin: "0.5rem .5rem 1rem .5rem" }}
							/>
							<div>
								<ModalProductName>
									Fall Limited Edition Sneakers
								</ModalProductName>
								<div
									style={{
										display: "flex",
										alignItems: "center",
									}}
								>
									<ModalPrice>
										{formatCurrency(125)} x {cartItems}
									</ModalPrice>
									<ModalTotalAmount>
										{formatCurrency(125 * cartItems)}
									</ModalTotalAmount>
								</div>
							</div>
							<AiFillDelete
								style={{
									margin: "0  1rem 0 .5rem",
									cursor: "pointer",
								}}
								onClick={removeFromCart}
							/>
						</ModalContentContainer>

						<ModalButton>Checkout</ModalButton>
					</ModalWrapper>
				))}
		</IconWrapper>
	);
};

export default Modal;
