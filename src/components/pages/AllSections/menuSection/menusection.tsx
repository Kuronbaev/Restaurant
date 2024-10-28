'use client'
import { categories, menuItems } from '@/data/categories'
import {
	default as leftIcon,
	default as rightIcon,
} from '@/assets//images/leftIcon.png'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import scss from './menusection.module.scss'

// Определяем типы
type MenuItem = {
	name: string
	price: string
	description: string
}

type MenuItems = {
	Desserts: MenuItem[]
	'Hot Drinks': MenuItem[]
	'Cold Drinks': MenuItem[]
	'Fast Foods': MenuItem[]
	'National Food': MenuItem[]
}

const Menu = () => {
	// Указываем тип selectedCategory как keyof MenuItems
	const [selectedCategory, setSelectedCategory] = useState<keyof MenuItems>(
		categories[0].name as keyof MenuItems // Приведение типа
	)
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	const handleCategoryClick = (categoryName: keyof MenuItems) => {
		if (selectedCategory !== categoryName) {
			setSelectedCategory(categoryName)
		}
	}

	return (
		<section className={scss.menus}>
			<div className='container'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: -50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1 }}
					className={scss.hero}
				>
					<Image width={51} height={14} src={leftIcon} alt='photo' />
					<h1>Main Menu</h1>
					<Image width={51} height={14} src={rightIcon} alt='photo' />
				</motion.div>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1 }}
					className={scss.heros}
				>
					<h2>
						Exceptional Quality. <br /> Delightfully Delicious
					</h2>
				</motion.div>
				<div className={scss.menucontainer}>
					<div className={scss.categoryMobile}>
						{categories.map(category => (
							<button
								key={category.id}
								onClick={() =>
									handleCategoryClick(category.name as keyof MenuItems)
								} // Приведение типа
								className={`${scss.categorybutton} ${
									selectedCategory === category.name ? scss.active : ''
								}`}
							>
								{category.name}
							</button>
						))}
					</div>
					<div className={scss.categories}>
						{categories.map(category => (
							<motion.button
								key={category.id}
								initial={{ opacity: 0, x: -100 }}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{
									delay: category.id * 0.1,
									duration: 0.5,
								}}
								onClick={() =>
									handleCategoryClick(category.name as keyof MenuItems)
								} // Приведение типа
								className={`${scss.categorybutton} ${
									selectedCategory === category.name ? scss.active : ''
								}`}
							>
								{category.name}
							</motion.button>
						))}
					</div>

					<AnimatePresence mode='wait'>
						<motion.div
							key={selectedCategory}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3 }}
							className={scss.menuitems}
						>
							<ul ref={ref}>
								{menuItems[selectedCategory]?.map((item, index) => (
									<motion.li
										key={index}
										className={scss.menuItem}
										initial={{ opacity: 0, y: 15 }}
										animate={isInView ? { opacity: 1, y: 0 } : {}}
										transition={{
											delay: index * 0.1, // задержка появления каждого элемента
											duration: 0.5,
										}}
									>
										<div className={scss.menuItemHeader}>
											<h2>{item.name}</h2>
											<div className={scss.dotLeader}></div>
											<span>{item.price}</span>
										</div>
										<p>{item.description}</p>
									</motion.li>
								))}
							</ul>
						</motion.div>
					</AnimatePresence>
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div className={scss.btn}>
						<hr />
						<button className={scss.formContact}>
							View Full menu <FaArrowRight />
						</button>
						<hr />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Menu
