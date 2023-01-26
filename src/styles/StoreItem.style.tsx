import styled from "styled-components";

export const CardButton = styled.button`
	padding: 0.9rem 5rem;
	border-radius: 5px;
	border: none;
	background-color: hsl(26, 100%, 55%);
	color: white;
	cursor: pointer;

	@media (max-width: 540px) {
		width: 100%;
		margin: 0 auto;
		margin-bottom: 2rem;
	}
	@media (max-width: 1024px) {
		padding: 0.7rem 1rem;
	}
`;
export const CartButton = styled.button`
	color: hsl(26, 100%, 55%);
	font-weight: bold;
	padding: 0.7rem 1.5rem;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	outline: none;
	box-sizing: border-box;

	&:active {
		outline: none;
		box-sizing: border-box;
	}
`;

export const CartFloor = styled.div`
	background-color: #f7f8fd;
	margin-right: 1rem;
	width: 35%;
	display: flex;
	justify-content: space-between;

	@media (max-width: 540px) {
		width: 100%;
		margin: 0 auto;
		display: flex;
		margin-top: 1rem;
		justify-content: space-between;
	}

	@media (max-width: 1024px) {
		margin-right: 2rem;
		/* margin-left: 2rem; */
	}
`;

export const CartContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;

	@media (max-width: 540px) {
		flex-direction: column;
	}
`;
