import React, { createContext, useContext, useState } from "react";

interface CartContext {
	count: number;
	addItem: () => void;
	subtractItem: () => void;
	cartItems: number;
	addToCart: (count: number) => void;
	removeFromCart: () => void;
}

const CartContext = createContext<CartContext | null>(null);

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};

interface CartProviderProps {
	children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
	const [count, setCount] = useState(0);
	const [cartItems, setCartItems] = useState(0);

	const addItem = () => {
		setCount(count + 1);
	};

	const subtractItem = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const addToCart = (count: number) => {
		setCartItems(cartItems + count);
		setCount(0);
	};

	const removeFromCart = () => {
		setCartItems(0);
	};

	return (
		<CartContext.Provider
			value={{
				count,
				addItem,
				subtractItem,
				addToCart,
				cartItems,
				removeFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
