import { FC, useEffect, useState } from "react";
import Categories from "./PizzaBlock/Categories";
import Pizza from "./PizzaBlock";
import Sort from "./Sort";
import MyLoader from "./PizzaBlock/PizzaBlockPlaceholder";
import axios from "axios";
import { fetchCategories } from "../app/categoriesSlice";
import { useAppDispatch } from "../app/hooks";


export type PizzasType = {
	id: number
	imageUrl: string
	title: string
	types: number[]
	sizes: number[]
	price: number
	category: number
	rating: number
}
type MainType = {
	addToCart: () => void
	onPizzaAdd: (price: number) => void
}

const Main: FC<MainType> = ({ addToCart, onPizzaAdd }) => {

	const [activeIndex, setActiceIndex] = useState(0);
	const [activeSort, setActiveSort] = useState('популярности');
	const [data, setData] = useState<PizzasType[]>([]);
	const [error, setError] = useState('');

	const dispatch = useAppDispatch();

	const sortsArr = ['популярности', 'цене', 'алфавиту'];


	useEffect(() => {

		axios({
			url: 'https://64ebaeb4e51e1e82c577948d.mockapi.io/items',
		})
			.then((res) => {
				if (res.status === 200) {
					setData(res.data);
				}
			})
			.catch(res => {
				setError(res.message);
			})

		dispatch(fetchCategories());

	}, [])


	const sortingItems = (a: PizzasType, b: PizzasType, condition: string) => {
		if (condition === 'популярности') {
			return b.rating - a.rating;
		}
		if (condition === 'цене') {
			return a.price - b.price;
		}
		if (condition === 'алфавиту') {
			return a.title.localeCompare(b.title);
		}
		return 1;
	}

	return (
		<div className="container">
			<div className="content__top">
				<Categories activeIndex={activeIndex}
					setActiceIndex={setActiceIndex} />
				<Sort sortsArr={sortsArr} activeSort={activeSort} setActiveSort={setActiveSort} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					data.length && !error
						? data.filter(item => activeIndex === 0 ? true : item.category === activeIndex)
							.sort((a, b) => sortingItems(a, b, activeSort))
							.map(item =>
								<Pizza key={item.id} addToCart={addToCart} setTotalPrice={onPizzaAdd} {...item} />
							)
						: error
							? error
							: [...new Array(6)].map((_, index) => <MyLoader key={index} />)
				}
			</div>
		</div>
	)
}

export default Main