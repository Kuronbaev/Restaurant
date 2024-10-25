import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import scss from './Header.module.scss'

const Header = () => {
	const { scrollYProgress } = useScroll()

	// Логируем прогресс скроллинга для отладки
	useEffect(() => {
		scrollYProgress.onChange(latest => {
			console.log('Scroll progress:', latest) // Проверяем, изменяется ли значение скролла
		})
	}, [scrollYProgress])

	return (
		<motion.header
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className={scss.Header}
		>
			{/* Прогресс-бар */}
			<motion.div
				className={scss.progressBar}
				style={{ scaleX: scrollYProgress }} // Анимация ширины бара в зависимости от скролла
			/>
			<div className='container'>
				<div className={scss.content}>
					<Link href='/'>
						<h1 className={scss.logo}>Restaurant</h1>
					</Link>
					<input type='checkbox' id='nav-check' className={scss.navCheck} />
					<nav>
						<div className={scss.navBtn}>
							<label htmlFor='nav-check'>
								<span></span>
								<span></span>
								<span></span>
							</label>
						</div>
					</nav>
					<nav className={scss.navigation}>
						<Link href='/menu'>Menu</Link>
						<Link href='#about'>About us</Link>
						<Link href='#interior'>Interior</Link>
						<Link href='#contact'>Contacts</Link>
					</nav>
					<div className={scss.block}>
						<div className={scss.search}>
							<input type='text' placeholder='Search' />
							<svg
								width='15.000000'
								height='15.000000'
								viewBox='0 0 15 15'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M6.37 0C2.85 0 0 2.85 0 6.37C0 9.88 2.85 12.74 6.37 12.74C9.88 12.74 12.74 9.88 12.74 6.37C12.74 2.85 9.88 0 6.37 0ZM6.37 11.56C3.5 11.56 1.17 9.23 1.17 6.37C1.17 3.5 3.5 1.17 6.37 1.17C9.24 1.17 11.57 3.5 11.57 6.37C11.57 9.23 9.24 11.56 6.37 11.56Z'
									fill='#333333'
								/>
								<path
									d='M14.82 13.99L11.45 10.62C11.22 10.39 10.85 10.39 10.62 10.62C10.39 10.85 10.39 11.22 10.62 11.45L13.99 14.82C14.11 14.94 14.26 15 14.41 15C14.56 15 14.71 14.94 14.82 14.82C15.05 14.59 15.05 14.22 14.82 13.99Z'
									fill='#333333'
								/>
							</svg>
						</div>
						<select>
							<option value='En'>En</option>
							<option value='Ru'>Ru</option>
							<option value='KG'>KG</option>
						</select>
					</div>
				</div>
			</div>
		</motion.header>
	)
}

export default Header
