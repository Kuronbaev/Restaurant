'use client'
import { categories, menus } from '@/data/categories'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import del from '../../../assets/images/delElement.png'
import scss from './Menu.module.scss'

type MenuItem = {
	name: string
	price: string
	composition?: string
	extras?: { name: string; price: string }[]
	drinks?: { name: string; price: string }[]
	url: string
}

const Menu = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>(
		categories[0].name
	)
	const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

	const handleCategory = (categoryName: string) => {
		if (!selectedItem) {
			setSelectedCategory(categoryName)
			setSelectedItem(null)
		}
	}

	const handleItemClick = (item: MenuItem) => {
		if (!selectedItem) {
			setSelectedItem(item)
		}
	}

	const handleCloseSelectedItem = () => {
		setSelectedItem(null)
	}

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			id='menu'
			className={scss.Menu}
		>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.categoryMobile}>
						<div className={scss.categories}>
							{categories.map(category => (
								<motion.button
									key={category.id}
									initial={{ opacity: 0, x: -100 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										delay: category.id * 0.1,
										duration: 0.5,
									}}
									onClick={() => handleCategory(category.name)}
									className={`${scss.categorybutton} ${
										selectedCategory === category.name ? scss.active : ''
									}`}
									aria-label={`Select ${category.name} category`}
								>
									{category.name}
								</motion.button>
							))}
						</div>
					</div>
					<motion.div
						key={selectedCategory}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className={scss.menuitems}
					>
						{/* Отображение выбранного элемента */}
						{selectedItem && (
							<motion.div
								className={scss.selectedItem}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1 }}
							>
								<button
									className={scss.closeButton}
									onClick={handleCloseSelectedItem}
									aria-label='Close selected item'
								>
									<Image src={del} width={53} height={53} alt='delete' />
								</button>
								<div className={scss.leftItems}>
									<Image
										width={329}
										height={187}
										src={selectedItem.url}
										alt={selectedItem.name}
									/>
									<div className={scss.notTogether}>
										<div className={scss.together}>
											<h2>{selectedItem.name}</h2>
											<p>{selectedItem.composition}</p>
										</div>
										<h3>{selectedItem.price}</h3>
									</div>
								</div>
								<div className={scss.rightItems}>
									<h4>Extras:</h4>
									<ul>
										{selectedItem.extras?.map((extra, index) => (
											<li key={index}>
												<span>{extra.name}</span>
												<span>{extra.price}</span>
											</li>
										))}
									</ul>
									<h4 style={{ marginTop: '30px' }}>Drinks:</h4>
									<ul>
										{selectedItem.drinks?.map((drink, index) => (
											<li key={index}>
												<span>{drink.name}</span>
												<span>{drink.price}</span>
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						)}
						{/* Список элементов с анимацией смещения вниз */}
						<motion.ul
							className={scss.alls}
							initial={{ y: 0 }}
							animate={{ y: selectedItem ? 50 : 0 }} // Смещение вниз
							transition={{ duration: 0.5 }}
						>
							{menus[selectedCategory]
								?.filter(item => item !== selectedItem) // Убираем выбранный элемент из списка
								.map((item, index) => (
									<motion.li
										key={index}
										className={scss.menuItem}
										initial={{ opacity: 0, y: 15 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											delay: index * 0.1,
											duration: 0.5,
										}}
										style={{
											cursor: selectedItem ? 'auto' : 'pointer',
										}}
										onClick={() => handleItemClick(item)}
									>
										<div className={scss.menuItemHeader}>
											<Image
												width={329}
												height={187}
												src={item.url}
												alt={item.name}
											/>
											<div className={scss.notTogether}>
												<div className={scss.together}>
													<h2>{item.name}</h2>
													<p>{item.composition}</p>
												</div>
												<h3>{item.price}</h3>
											</div>
										</div>
									</motion.li>
								))}
						</motion.ul>
					</motion.div>
				</div>
			</div>
		</motion.section>
	)
}

export default Menu
