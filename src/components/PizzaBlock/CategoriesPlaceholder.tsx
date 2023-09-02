import ContentLoader from "react-content-loader"


const CategoriesPlaceholder = () => (
	<ContentLoader
		speed={2}
		width={120}
		height={50}
		viewBox="0 0 120 50"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="0" y="0" rx="20" ry="20" width="120" height="50" />
	</ContentLoader>
)


export default CategoriesPlaceholder