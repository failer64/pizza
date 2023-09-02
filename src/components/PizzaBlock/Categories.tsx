import { FC } from "react"
import CategoriesPlaceholder from "./CategoriesPlaceholder"
import { useAppSelector } from "../../app/hooks"

type CategoriesType = {
	activeIndex: number
	setActiceIndex: (index: number) => void
}

const Categories: FC<CategoriesType> = ({ activeIndex, setActiceIndex }) => {

	const categories = useAppSelector(state => state.categories.categories);

	return (
		<div className="categories">
			<ul>
				{
					!categories.length
						? [...new Array(5)].map((_, i) => <CategoriesPlaceholder key={i} />)
						: categories.map((item, i) =>
							<li key={i}
								className={activeIndex === i ? 'active' : ''}
								onClick={() => setActiceIndex(i)}
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