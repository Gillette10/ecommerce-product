import styled, { css } from "styled-components";

const slideTransition = css`
	transition: all 0.5s ease-in-out;
`;

export const HomeContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin: 4rem 4rem;

	@media (max-width: 541px) {
		flex-direction: column;
		margin: 0;
	}
`;

export const Thumbnail = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 10px;
	margin-right: 1.9rem;
	margin-top: 1rem;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}

	&.selected-thumbnail {
		border: 2px solid hsl(26, 100%, 55%);
		opacity: 0.6;
	}

	@media (max-width: 540px) {
		display: none;
	}

	@media (max-width: 1024px) {
		margin-left: 1rem;
		margin-right: 0;
	}
`;

export const CurrentImage = styled.img`
	border-radius: 10px;
	width: 290px;
	cursor: pointer;

	&.slide-in {
		${slideTransition}
	}

	@media (max-width: 540px) {
		width: 100%;
		object-fit: cover;
		border-radius: 0;
	}
`;
export const CarouselOverlay = styled.div`
	${slideTransition}
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.75);
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 540px) {
		display: none;
	}
`;

export const CarouselContent = styled.div`
	${slideTransition}
	position: relative;
	/* width: 80%;
	height: 80%; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 2;

	@media (max-width: 540px) {
		display: none;
	}
`;

export const CarouselClose = styled.div`
	${slideTransition}
	position: absolute;
	top: -35px;
	right: 0;
	color: white;
	cursor: pointer;
	font-weight: bold;

	&:hover {
		color: hsl(26, 100%, 55%);
	}

	@media (max-width: 540px) {
		display: none;
	}
`;
export const CarouselButtonPrevious = styled.div`
	${slideTransition}

	position: absolute;
	top: 35%;
	right: -6%;

	cursor: pointer;
`;
export const CarouselButtonNext = styled(CarouselButtonPrevious)`
	left: -6%;
`;
export const MobileButtonPrevious = styled(CarouselButtonPrevious)`
	top: 40%;
	right: 5%;

	@media (min-width: 541px) {
		display: none;
	}
`;
export const MobileButtonNext = styled(MobileButtonPrevious)`
	left: 5%;
`;
