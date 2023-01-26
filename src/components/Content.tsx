import {
	ContentAmount,
	ContentBody,
	ContentDiscount,
	ContentFlex,
	ContentHeader,
	ContentTitle,
	Discounted,
} from "../styles/Content.style";
import { formatCurrency } from "../utilities/formatCurrency";
import StoreItem from "./StoreItem";

const Content = () => {
	return (
		<div style={{ margin: "0 2rem", flexBasis: "50%" }}>
			<ContentHeader>sneaker company</ContentHeader>
			<ContentTitle>
				Fall Limited Edition <br /> Sneakers
			</ContentTitle>
			<ContentBody>
				These low-profile sneakers are your perfect casual wear comparison.
				Featuring a durable ouer sole, they'll withstand everything the weather
				can offer
			</ContentBody>
			<ContentFlex>
				<div
					style={{
						display: "flex",
						gap: "1rem",
						alignItems: "center",
					}}
				>
					<ContentAmount>{formatCurrency(125)}</ContentAmount>
					<ContentDiscount>50%</ContentDiscount>
				</div>
				<Discounted>{formatCurrency(250)}</Discounted>
			</ContentFlex>
			<StoreItem />
		</div>
	);
};

export default Content;
