import './App.scss'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Main from './components/Main'
import ErrorPage from './components/404'


const App = () => {
	return (
		< >
			<Header />
			<div className="content">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
		</>
	)
}

export default App