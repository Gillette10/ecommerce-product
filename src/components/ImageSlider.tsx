import React, { useState } from "react";
import IconNext from "../assets/icon-next.svg";
import IconPrev from "../assets/icon-previous.svg";
import {
	CarouselButtonNext,
	CarouselButtonPrevious,
	CarouselClose,
	CarouselContent,
	CarouselOverlay,
	CurrentImage,
	MobileButtonNext,
	MobileButtonPrevious,
	Thumbnail,
} from "../styles/ImageSlider.style";

interface ImageSliderProps {
	images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
	const [currentImage, setCurrentImage] = useState(images[0]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showCarousel, setShowCarousel] = useState(false);

	const handleMainImageClick = () => {
		setShowCarousel(true);
	};

	const handleCloseClick = () => {
		setShowCarousel(false);
	};

	const handlePrevClick = () => {
		if (currentIndex === 0) {
			setCurrentImage(images[images.length - 1]);
			setCurrentIndex(images.length - 1);
		} else {
			setCurrentImage(images[currentIndex - 1]);
			setCurrentIndex(currentIndex - 1);
		}
	};

	const handleNextClick = () => {
		if (currentIndex === images.length - 1) {
			setCurrentImage(images[0]);
			setCurrentIndex(0);
		} else {
			setCurrentImage(images[currentIndex + 1]);
			setCurrentIndex(currentIndex + 1);
		}
	};

	return (
		<>
			<div>
				<div style={{ position: "relative" }}>
					<MobileButtonNext src={IconPrev} onClick={handlePrevClick} />

					<CurrentImage
						src={currentImage}
						alt="Current Image"
						onClick={handleMainImageClick}
						className={`current-image ${currentIndex === 0 ? "slide-in" : ""}`}
					/>

					<MobileButtonPrevious src={IconNext} onClick={handleNextClick} />
				</div>
				<div>
					{images.map((image, i) => (
						<Thumbnail
							key={i}
							src={image}
							alt="Carousel Image"
							onClick={() => setCurrentImage(image)}
							className={`  ${
								currentImage === image ? "selected-thumbnail" : ""
							}`}
						/>
					))}
				</div>
			</div>

			{showCarousel && (
				<CarouselOverlay>
					<CarouselContent>
						<div>
							<CarouselButtonNext src={IconPrev} onClick={handlePrevClick} />
							<CurrentImage
								src={currentImage}
								alt="Current Image"
								onClick={handleMainImageClick}
								style={{ width: "350px" }}
							/>

							<CarouselButtonPrevious
								src={IconNext}
								onClick={handleNextClick}
							/>
							<CarouselClose onClick={handleCloseClick}>X</CarouselClose>
						</div>

						<div
							style={{
								display: "flex",
								justifyContent: "center",
								marginLeft: "1.8rem",
							}}
						>
							{images.map((image, i) => (
								<Thumbnail
									key={i}
									src={image}
									alt="Carousel Image"
									onClick={() => {
										setCurrentImage(image);
										setCurrentIndex(i);
									}}
									className={`${
										currentImage === image ? "selected-thumbnail" : ""
									}`}
								/>
							))}
						</div>
					</CarouselContent>
				</CarouselOverlay>
			)}
		</>
	);
};

export default ImageSlider;
