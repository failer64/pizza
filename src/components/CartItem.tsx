import { FC } from "react";
import { ItemsType, addItem, removeItem, removeItems } from "../app/cartSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";


const CartItem: FC<ItemsType> = ({ title, imageUrl, price, sizes, activeSize, activeType }) => {

	const typesNames = useAppSelector(state => state.attributes.types);

	const totalCount = useAppSelector(state => state.cartItems.items)
		.filter((i) =>
			i.title === title && i.activeSize === activeSize
			&& i.activeType === activeType)
		.length;

	const dispatch = useAppDispatch();

	return (
		<div className="cart__item">
			<div className="cart__item-img">
				<img
					className="pizza-block__image"
					src={imageUrl}
					alt="Pizza" />
			</div>
			<div className="cart__item-info">
				<h3>{title}</h3>
				<p>{typesNames[activeType]}, {sizes[activeSize]} см.</p>
			</div>
			<div className="cart__item-count">
				<div
					onClick={() => dispatch(removeItem({ title, imageUrl, price, sizes, activeSize, activeType }))}
					className="button button--outline button--circle cart__item-count-minus">
					-
				</div>
				<b>{totalCount}</b>
				<div
					onClick={() => dispatch(addItem({ title, imageUrl, price, sizes, activeSize, activeType }))}
					className="button button--outline button--circle cart__item-count-plus"				>
					+
				</div>
			</div>
			<div className="cart__item-price">
				<b>{price} ₽ * {totalCount} = {price * totalCount} ₽</b>
			</div>
			<div className="cart__item-remove">
				<div
					onClick={() => dispatch(removeItems({ title, imageUrl, price, sizes, activeSize, activeType }))}
					className="button button--outline button--circle">
					X
				</div>
			</div>
		</div>
	);
};

export default CartItem