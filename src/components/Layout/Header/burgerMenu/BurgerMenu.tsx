'use client'

import burgerMenu from '@/assets/images/burgerMenu.png'
import x from '@/assets/images/x.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './burgerMenu.module.scss'

export default function BurgerMenu() {
	const [isOpen, setIsOpen] = useState<Boolean>(false)

	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (isOpen && !event.target.closest(`.${styles.aa}`)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [isOpen])

	return (
		<div className={styles.burgerMenu}>
			{isOpen ? (
				<Image
					className={styles.closeButton}
					onClick={() => setIsOpen(false)}
					src={x}
					alt='menu'
					width={34}
					height={34}
				/>
			) : (
				<Image
					className={styles.menuButton}
					onClick={() => setIsOpen(true)}
					src={burgerMenu}
					alt='menu'
					width={34}
					height={34}
				/>
			)}

			{isOpen && (
				<div className={styles.menuOverlay}>
					<nav className={styles.menuNav}>
						<a href='#interior'>Interior</a>
						<a href='#about'>About Us</a>
						<a href='/menu'>Menu</a>
						<a href='#contact'>Contacts</a>
					</nav>
					<div className={styles.languageSwitcher}>
						<span>EN</span>
						<span>RU</span>
						<span>KG</span>
					</div>
				</div>
			)}
		</div>
	)
}
