import { FC } from "react";
import cart from '/src/assets/images/cart.svg'
import trash from '/src/assets/images/trash.svg'
import arrow from '/src/assets/images/grey-arrow-left.svg'
import { Link, useNavigate } from "react-router-dom";

type CartType = {
	count: number
	totalPrice: number
	setCount: (num: number) => void
	setTotalPrice: (num: number) => void
}

const Cart: FC<CartType> = ({ count, totalPrice, setCount, setTotalPrice }) => {

	const navigate = useNavigate();

	const clearCart = () => {
		setCount(0);
		setTotalPrice(0);
		navigate('/empty');
	}

	return (
		<>
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
				<div className="content__items">
					{/* <% include components/cart-item.ejs %> <% include components/cart-item.ejs %> <%
              include components/cart-item.ejs %> <% include components/cart-item.ejs %> */}
				</div>
				<div className="cart__bottom">
					<div className="cart__bottom-details">
						<span> Всего пицц: <b>{count} шт.</b> </span>
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
		</>
	)
}

export default Cart