import Content from "../components/Content";
import ImageSlider from "../components/ImageSlider";
import Images from "../data/items.json";
import { HomeContainer } from "../styles/ImageSlider.style";

const Home = () => {
	return (
		<HomeContainer>
			{Images.map((image) => {
				return <ImageSlider {...image} key={image.id} />;
			})}
			<Content />
		</HomeContainer>
	);
};

export default Home;
