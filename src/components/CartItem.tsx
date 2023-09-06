//import plus from '/src/assets/images/plus.svg'

import { FC } from "react";
import { ItemsType, addItem, removeItem, removeItems } from "../app/cartSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

type CartItemType = {
	item: ItemsType
}

const CartItem: FC<CartItemType> = (props) => {

	const typesNames = useAppSelector(state => state.attributes.types);

	const totalCount = useAppSelector(state => state.cartItems.items)
		.filter((i) =>
			i.title === props.item.title && i.activeSize === props.item.activeSize && i.activeType === props.item.activeType)
		.length;

	const dispatch = useAppDispatch();

	return (
		<div className="cart__item">
			<div className="cart__item-img">
				<img
					className="pizza-block__image"
					src={props.item.imageUrl}
					alt="Pizza" />
			</div>
			<div className="cart__item-info">
				<h3>{props.item.title}</h3>
				<p>{typesNames[props.item.activeType]}, {props.item.sizes[props.item.activeSize]} см.</p>
			</div>
			<div className="cart__item-count">
				<div
					onClick={() => dispatch(removeItem(props.item))}
					className="button button--outline button--circle cart__item-count-minus">
					-
				</div>
				<b>{totalCount}</b>
				<div
					onClick={() => dispatch(addItem(props.item))}
					className="button button--outline button--circle cart__item-count-plus"				>
					+
				</div>
			</div>
			<div className="cart__item-price">
				<b>{props.item.price} ₽ * {totalCount} = {props.item.price * totalCount} ₽</b>
			</div>
			<div className="cart__item-remove">
				<div
					onClick={() => dispatch(removeItems(props.item))}
					className="button button--outline button--circle">
					X
				</div>
			</div>
		</div>
	);
};

export default CartItem