import { FC } from "react";
import cart from '/src/assets/images/cart.svg'
import trash from '/src/assets/images/trash.svg'
import arrow from '/src/assets/images/grey-arrow-left.svg'
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ItemsType, clearItems } from "../app/cartSlice";
import CartEmpty from "./CartEmpty";


const Cart: FC = () => {

	const dispatch = useAppDispatch();

	const items = useAppSelector(state => state.cartItems.items);

	//const uniqeItems = items.filter((n, i, a) => i === a.findIndex(m => m === n));

	const uniqeItems = items.reduce((res, cur) =>
		res.find((find) => JSON.stringify(find) === JSON.stringify(cur))
			? res
			: [...res, cur]
		, [] as ItemsType[])


	const totalItems = items.length;
	const totalPrice = items.reduce((acc, curr) => acc + curr.price, 0);

	const clearCart = () => {
		dispatch(clearItems()); // Очистка корзины
	}

	if (!items.length) return <CartEmpty />; // Если пусто то редирект в пустую корзину


	return (
		<div className="container container--cart">
			<div className="cart">
				<div className="cart__top">
					<h2 className="content__title">
						<img src={cart} alt="Cart" />
						<span>Корзина</span>
					</h2>
					<div className="cart__clear">
						<img src={trash} alt="Clear" />
						<span onClick={clearCart}>Очистить корзину</span>
					</div>
				</div>
				<div>
					{
						uniqeItems.map((item, i) =>
							<CartItem key={i} item={item} />
						)
					}
				</div>
				<div className="cart__bottom">
					<div className="cart__bottom-details">
						<span> Всего пицц: <b>{totalItems} шт.</b> </span>
						<span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
					</div>
					<div className="cart__bottom-buttons">
						<Link to="/" className="button button--outline button--add go-back-btn">
							<img src={arrow} alt="Cart" />
							<span>Вернуться назад</span>
						</Link>
						<div className="button pay-btn">
							<span>Оплатить сейчас</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart