'use client'
import { categories, menus } from '@/data/categories'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
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

type MenuType = keyof typeof menus

const Menu = () => {
	const [selectedCategory, setSelectedCategory] = useState<MenuType>(
		categories[0].name as MenuType
	)
	const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
	const selectedItemRef = useRef<HTMLDivElement>(null)

	const handleCategory = useCallback(
		(categoryName: MenuType) => {
			if (!selectedItem) {
				setSelectedCategory(categoryName)
				setSelectedItem(null)
			}
		},
		[selectedItem]
	)

	const handleItemClick = useCallback(
		(item: MenuItem) => {
			if (!selectedItem) {
				setSelectedItem(item)
				window.scrollTo(0, 0)
			}
		},
		[selectedItem]
	)

	const handleCloseSelectedItem = () => setSelectedItem(null)

	// useEffect для отслеживания активации selectedItem и отключения прокрутки
	useEffect(() => {
		// Функция для управления прокруткой
		const toggleScroll = (disableScroll: boolean) => {
			if (window.innerWidth <= 430) {
				document.body.classList.toggle('no-scroll', disableScroll)
			}
		}

		// Отключаем прокрутку, если выбран элемент
		toggleScroll(Boolean(selectedItem))

		// Очистка при размонтировании
		return () => document.body.classList.remove('no-scroll')
	}, [selectedItem])

	// useEffect для закрытия элемента по клику вне области
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectedItemRef.current &&
				!selectedItemRef.current.contains(event.target as Node)
			) {
				setSelectedItem(null)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

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
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className={scss.categories}
						>
							{categories.map(category => (
								<button
									key={category.id}
									onClick={() => handleCategory(category.name as MenuType)}
									className={`${scss.categorybutton} ${
										selectedCategory === category.name ? scss.active : ''
									}`}
									aria-label={`Select ${category.name} category`}
								>
									{category.name}
								</button>
							))}
						</motion.div>
					</div>
					<motion.div
						ref={selectedItemRef}
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
