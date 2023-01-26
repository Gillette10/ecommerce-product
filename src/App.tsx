import { GlobalStyle } from "./globalStyles";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import { CartProvider } from "./context/ShoppingCartContext";

function App() {
	return (
		<CartProvider>
			<GlobalStyle />
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/collection" element={<Collection />} />
				<Route path="/men" element={<Men />} />
				<Route path="/women" element={<Women />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</CartProvider>
	);
}

export default App;

// {

// 	"img": [
// 		"/src/assets/imgs/image-product-1.jpg",
// 		"/src/assets/imgs/image-product-2.jpg",
// 		"/src/assets/imgs/image-product-3.jpg",
// 		"/src/assets/imgs/image-product-4.jpg"
// 	],
// 	"id": 1
// }
