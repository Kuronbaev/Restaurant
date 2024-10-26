// Header.tsx
'use client'
import { useLanguage } from '@/components/LanguageContext'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
import scss from './Header.module.scss'

const translations = {
	logo: {
		en: 'Restaurant',
		ru: 'Ресторан',
		kg: 'Ресторан',
	},
	menu: {
		en: 'Menu',
		ru: 'Меню',
		kg: 'Меню',
	},
	about: {
		en: 'About us',
		ru: 'О нас',
		kg: 'О нас',
	},
	contacts: {
		en: 'Contacts',
		ru: 'Контакты',
		kg: 'Контакты',
	},
	interior: {
		en: 'Interior',
		ru: 'Интерьер',
		kg: 'Интерьер',
	},
}

const Header = () => {
	const { scrollYProgress } = useScroll()
	const { lang, setLang } = useLanguage()

	const handleLanguageChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setLang(event.target.value)
	}

	return (
		<motion.header
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className={scss.Header}
		>
			<motion.div
				className={scss.progressBar}
				style={{ scaleX: scrollYProgress }}
			/>
			<div className='container'>
				<div className={scss.content}>
					<Link href='/'>
						<h1 className={scss.logo}>{translations.logo[lang]}</h1>
					</Link>
					<nav className={scss.navigation}>
						<Link href='#interior'>{translations.interior[lang]}</Link>
						<Link href='/menu'>{translations.menu[lang]}</Link>
						<Link href='#about'>{translations.about[lang]}</Link>
						<Link href='#contact'>{translations.contacts[lang]}</Link>
					</nav>
					<div className={scss.block}>
						<select value={lang} onChange={handleLanguageChange}>
							<option value='en'>En</option>
							<option value='ru'>Ru</option>
							<option value='kg'>KG</option>
						</select>
					</div>
				</div>
			</div>
		</motion.header>
	)
}

export default Header
