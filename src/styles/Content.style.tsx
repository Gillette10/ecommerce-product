import styled from "styled-components";

export const ContentHeader = styled.div`
	text-transform: uppercase;
	font-weight: 700;
	color: hsl(25.102040816326536, 100%, 61.568627450980394%);
`;
export const ContentTitle = styled.div`
	font-weight: 700;
	font-size: 2rem;
	margin-bottom: 2rem;

	@media (max-width: 425px) {
		margin-bottom: 1rem;
		font-size: 1.7rem;
	}
`;
export const ContentBody = styled.div`
	line-height: 1.5;
	margin-bottom: 2rem;

	@media (min-width: 426px) {
		opacity: 0.8;
	}
`;

export const ContentAmount = styled.div`
	font-weight: bold;
	font-size: 1.5rem;
`;

export const Discounted = styled.div`
	text-decoration: line-through;
	opacity: 0.7;
	font-size: 0.8rem;
	margin-bottom: 2rem;

	@media (max-width: 540px) {
		margin-top: 0.6rem;
		margin-bottom: 1rem;
	}
`;

export const ContentDiscount = styled.div`
	background-color: hsl(25, 100%, 94%);
	color: hsl(32.142857142857146, 66.14173228346455%, 49.80392156862745%);
	padding: 0.2rem 0.4rem;
	font-weight: bold;
	font-size: 0.7rem;
	border-radius: 5px;
`;
export const ContentFlex = styled.div`
	display: flex;
	gap: 1rem;

	justify-content: space-between;

	@media (min-width: 541px) {
		flex-direction: column;
	}
`;
