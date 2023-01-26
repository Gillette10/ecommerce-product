import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/ShoppingCartContext";
import { HiPlus, HiMinus } from "react-icons/hi";
import {
	CardButton,
	CartButton,
	CartContainer,
	CartFloor,
} from "../styles/StoreItem.style";

const StoreItem = () => {
	const { count, addItem, subtractItem, addToCart } = useCart();
	return (
		<CartContainer>
			<CartFloor>
				<CartButton onClick={subtractItem} className="active">
					<HiMinus />
				</CartButton>
				<span style={{ padding: "0.3rem 0.8rem" }}>{count}</span>
				<CartButton onClick={addItem} className="active">
					<HiPlus />
				</CartButton>
			</CartFloor>
			<CardButton onClick={() => addToCart(count)}>
				<FaShoppingCart style={{ marginRight: "5px" }} /> Add to Cart
			</CardButton>
		</CartContainer>
	);
};

export default StoreItem;
