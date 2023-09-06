import { useEffect } from "react";
import Categories from "./PizzaBlock/Categories";
import Pizza from "./PizzaBlock";
import Sort from "./Sort";
import PizzaBlockPlaceholder from "./PizzaBlock/PizzaBlockPlaceholder";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchCategories, fetchItems } from "../app/mainPageSlice";


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

const Main = () => {

	const items = useAppSelector(state => state.mainPage.items);
	const activeCategory = useAppSelector(state => state.mainPage.activeCategory);
	const sortsArr = useAppSelector(state => state.mainPage.sortsArr);
	const activeSorting = useAppSelector(state => state.mainPage.activeSorting);
	const activeSort = sortsArr[activeSorting];

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchItems());
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
				<Categories activeCategory={activeCategory} />
				<Sort sortsArr={sortsArr} activeSort={activeSort} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					items.length
						? items.filter(item => activeCategory === 0 ? true : item.category === activeCategory)
							.sort((a, b) => sortingItems(a, b, activeSort))
							.map(item =>
								<Pizza key={item.id} {...item} />
							)
						: [...new Array(6)].map((_, index) =>
							<PizzaBlockPlaceholder key={index} />
						)
				}
			</div>
		</div>
	)
}

export default Main