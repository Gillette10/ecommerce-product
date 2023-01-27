import Content from "../components/Content";
import ImageSlider from "../components/ImageSlider";
import { HomeContainer } from "../styles/ImageSlider.style";
import { productImages } from "../ProductImages";

const Home = () => {
	return (
		<HomeContainer>
			<ImageSlider images={productImages} />
			<Content />
		</HomeContainer>
	);
};

export default Home;
