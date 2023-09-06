import ContentLoader from "react-content-loader"


const MyLoader = () => (
	<ContentLoader
		speed={2}
		width={290}
		height={467}
		viewBox="0 0 290 467"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<circle cx="125" cy="125" r="125" />
		<rect x="0" y="310" rx="10" ry="10" width="290" height="92" />
		<rect x="131" y="422" rx="20" ry="20" width="150" height="45" />
		<rect x="0" y="260" rx="10" ry="10" width="290" height="30" />
		<rect x="0" y="430" rx="10" ry="10" width="90" height="30" />
	</ContentLoader>
)

export default MyLoader

