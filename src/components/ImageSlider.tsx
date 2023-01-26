import React, { useState } from "react";
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io";
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
	img: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ img }) => {
	const [currentImage, setCurrentImage] = useState(img[0]);
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
			setCurrentImage(img[img.length - 1]);
			setCurrentIndex(img.length - 1);
		} else {
			setCurrentImage(img[currentIndex - 1]);
			setCurrentIndex(currentIndex - 1);
		}
	};

	const handleNextClick = () => {
		if (currentIndex === img.length - 1) {
			setCurrentImage(img[0]);
			setCurrentIndex(0);
		} else {
			setCurrentImage(img[currentIndex + 1]);
			setCurrentIndex(currentIndex + 1);
		}
	};

	return (
		<>
			<div>
				<div style={{ position: "relative" }}>
					<MobileButtonNext onClick={handlePrevClick}>
						<IoIosArrowDropleftCircle color="white" size={50} />
					</MobileButtonNext>

					<CurrentImage
						src={currentImage}
						alt="Current Image"
						onClick={handleMainImageClick}
						className={`current-image ${currentIndex === 0 ? "slide-in" : ""}`}
					/>
					<MobileButtonPrevious onClick={handleNextClick}>
						<IoIosArrowDroprightCircle color="white" size={50} />
					</MobileButtonPrevious>
				</div>
				<div>
					{img.map((image, i) => (
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
						<CarouselButtonNext onClick={handlePrevClick}>
							<IoIosArrowDropleftCircle color="white" size={50} />
						</CarouselButtonNext>
						<CurrentImage
							src={currentImage}
							alt="Current Image"
							onClick={handleMainImageClick}
							style={{ width: "350px" }}
							className={`current-image ${
								currentIndex === 0 ? "slide-in" : ""
							}`}
						/>
						<CarouselButtonPrevious onClick={handleNextClick}>
							<IoIosArrowDroprightCircle color="white" size={50} />
						</CarouselButtonPrevious>
						<CarouselClose onClick={handleCloseClick}>X</CarouselClose>
						<div>
							{img.map((image, i) => (
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
