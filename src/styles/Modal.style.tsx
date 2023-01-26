import styled from "styled-components";

export const ModalTitle = styled.div`
	border-bottom: 1px solid #c7c7c7;
	margin-bottom: 0.5rem;
	padding: 1rem;
	font-weight: 700;
`;

export const ModalContentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 540px) {
		justify-content: space-around;
	}
`;

export const ModalProductName = styled.div`
	font-size: 0.8rem;
`;

export const ModalTotalAmount = styled.div`
	font-size: 0.8rem;
	margin-top: 0.4rem;
	margin-left: 0.4rem;
	font-weight: 700;
`;

export const ModalPrice = styled.div`
	margin-top: 0.4rem;
	font-size: 0.7rem;
	opacity: 0.8;
`;

export const ModalThumbnail = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 10px;
	margin-right: 1.9rem;
	margin-top: 1rem;
	cursor: pointer;
`;

export const ModalButton = styled.button`
	padding: 0.9rem 5rem;
	border-radius: 5px;
	border: none;
	background-color: hsl(26, 100%, 55%);
	color: white;
	cursor: pointer;
	margin: 0 auto;
	width: 90%;

	@media (max-width: 540px) {
		margin-top: 2%;
	}
`;
