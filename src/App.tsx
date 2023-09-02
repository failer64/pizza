import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Main from './components/Main'
import CartEmpty from './components/CartEmpty'
import ErrorPage from './components/404'


const App = () => {

	const [count, setCount] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const addToCart = () => {
		setCount(prevState => prevState + 1)
	}

	const onPizzaAdd = (price: number) => {
		setTotalPrice(prevState => prevState + price)
	}

	return (
		< >
			<Header count={count} totalPrice={totalPrice} />
			<div className="content">
				<div className="container">
					<Routes>
						<Route path="/" element={<Main addToCart={addToCart} onPizzaAdd={onPizzaAdd} />} />
						<Route path="/cart" element={
							<Cart count={count} totalPrice={totalPrice}
								setCount={setCount} setTotalPrice={setTotalPrice} />
						} />
						<Route path="/empty" element={<CartEmpty />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</div>
			</div>
		</>
	)
}

export default App