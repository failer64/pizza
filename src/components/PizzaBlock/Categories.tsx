import { FC } from "react"
import CategoriesPlaceholder from "./CategoriesPlaceholder"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { changeCategory } from "../../app/mainPageSlice"


type CategoriesType = {
	activeCategory: number
}

const Categories: FC<CategoriesType> = ({ activeCategory }) => {

	const categories = useAppSelector(state => state.mainPage.categories);
	const dispatch = useAppDispatch();

	return (
		<div className="categories">
			<ul>
				{
					!categories.length
						? [...new Array(5)].map((_, i) => <CategoriesPlaceholder key={i} />)
						: categories.map((item, i) =>
							<li key={i}
								className={activeCategory === i ? 'active' : ''}
								onClick={() => dispatch(changeCategory(i))}
							>
								{item}
							</li>
						)
				}
			</ul>
		</div >
	)
}

export default Categories