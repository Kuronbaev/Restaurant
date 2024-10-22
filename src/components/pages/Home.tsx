import VisitRestaurant from './AllSections/fifthSection/VisitRestaurant'
import Delicious from './AllSections/firstSection/Delicious'
import Interior from './AllSections/fourthSection/Interior'
import Menu from './AllSections/menuSection/menusection'
import About from './AllSections/secondSection/About'
import BestSellers from './AllSections/thirdSection/BestSellers'

const Home = () => {
	return (
		<div>
			<Delicious />
			<About />
			<BestSellers />
			<Menu />
			<Interior />
			<VisitRestaurant />
		</div>
	)
}

export default Home
