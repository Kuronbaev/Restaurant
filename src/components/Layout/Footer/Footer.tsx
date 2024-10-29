'use client '
import telegram from '@/assets//images/Telegram.png'
import instagram from '@/assets/images/Instagram.png'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import scss from './Footer.module.scss'
const Footer = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	return (
		<motion.footer
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{
				duration: 1,
			}}
			className={scss.Footer}
		>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.navs}>
						<h1>Restaurant</h1>

						<nav className={scss.inWeb}>
							<a href='#'>Menu</a>
							<a href='#about'>About Us</a>
							<a href='#interior'>Interior</a>
							<a href='#contact'>Contacts</a>
						</nav>

						<nav className={scss.soc}>
							<a href='https://t.me/Amir030707' target='_blank'>
								<Image src={telegram} alt='telegram' width={30} height={27} />
							</a>
							<a href='#'>
								<Image src={instagram} alt='instagram' width={30} height={27} />
							</a>
						</nav>
					</div>
					<hr />
					<span>C 2023 Motion Study LLC</span>
				</div>
			</div>
		</motion.footer>
	)
}

export default Footer
