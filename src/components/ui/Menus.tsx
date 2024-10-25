'use client'
import { useGetMenuQuery } from '@/redux/api/client'
import scss from './Menus.module.scss'
import Template from './Template'

const Menus = () => {
	const { data } = useGetMenuQuery()

	console.log(data)
	return (
		<section className={scss.MenusSection}>
			<Template>
				<div className='container'>
					<div className={scss.content}>Menu</div>
				</div>
			</Template>
		</section>
	)
}

export default Menus
