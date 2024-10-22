'use client'
import { categories, menuItems } from '@/data/categories'
import {
	default as leftIcon,
	default as rightIcon,
} from '@/images/leftIcon.png'
import Image from 'next/image'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import scss from './menusection.module.scss'

const Menu = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>(
		categories[0].name
	)

	const handleCategoryClick = async (categoryName: string) => {
		if (selectedCategory !== categoryName) {
			setSelectedCategory(categoryName)
		}
	}

	const variants = {
		initial: { opacity: 0, y: -20 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -20 },
	}

	return (
		<section className={scss.menus}>
			<div className='container'>
				<div className={scss.hero}>
					<Image width={51} height={14} src={leftIcon} alt='photo' />
					<h1>Main Menu</h1>
					<Image width={51} height={14} src={rightIcon} alt='photo' />
				</div>
				<div className={scss.heros}>
					<h2>
						Exceptional Quality. <br /> Delightfully Delicious
					</h2>
				</div>
				<div className={scss.menucontainer}>
					{/* {category button max-width: 768px} */}
					<div className={scss.categoryMobile}>
						{categories.map(category => (
							<button
								key={category.id}
								onClick={() => handleCategoryClick(category.name)}
								className={`${scss.categorybutton} ${
									selectedCategory === category.name ? scss.active : ''
								}`}
							>
								{category.name}
							</button>
						))}
					</div>
					{/* Левая часть - Категории */}
					<div className={scss.categories}>
						{categories.map(category => (
							<button
								key={category.id}
								onClick={() => handleCategoryClick(category.name)}
								className={`${scss.categorybutton} ${
									selectedCategory === category.name ? scss.active : ''
								}`}
							>
								{category.name}
							</button>
						))}
					</div>

					{/* Правая часть - Меню по выбранной категории */}
					<div className={scss.menuitems}>
						<ul>
							{menuItems[selectedCategory]
								?.map((item, index) => (
									<li key={index} className={scss.menuItem}>
										<div className={scss.menuItemHeader}>
											<h2>{item.name}</h2>
											<div className={scss.dotLeader}></div>
											<span>{item.price}</span>
										</div>
										<p>{item.description}</p>
									</li>
								))
								.slice(0, 5)}
						</ul>
					</div>
				</div>
				<div className={scss.btn}>
					<hr />
					<button className={scss.formContact}>
						View Full menu <FaArrowRight />
					</button>
					<hr />
				</div>
			</div>
		</section>
	)
}

export default Menu
