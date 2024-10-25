'use client'
import leftIcon from '@/images/leftIcon.png'
import first_photo from '@/images/third_section_1.png'
import second_photo from '@/images/third_section_2.png'
import arrow from '@/images/third_section_arrow.png'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import scss from './bestSellers.module.scss'

const BestSellers = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	return (
		<section className={scss.BestSellers}>
			<div className='container'>
				<div className={scss.content}>
					<motion.div
						ref={ref}
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 1 }}
						className={scss.hero}
					>
						<Image src={leftIcon} alt='photo' width={51} height={14} />
						<h3>Best Sellers</h3>
					</motion.div>
					<div className={scss.block}>
						<motion.div
							ref={ref}
							initial={{ opacity: 0, x: -50 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 1 }}
							className={scss.text}
						>
							<h1>You Only Reserve Exception</h1>
							<p>
								Each location has a menu that`s curated just for them. See what
								new at your Cafesio and You`ll find Cafesio Covent Carden
								moments.
							</p>
						</motion.div>
						<motion.div
							ref={ref}
							initial={{ opacity: 0, x: 50 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 1 }}
							className={scss.images}
						>
							<Image src={first_photo} alt='photo' width={266} height={281} />
							<Image src={second_photo} alt='photo' width={266} height={281} />
							<Image
								className={scss.arrow}
								src={arrow}
								alt='photo'
								width={23}
								height={40}
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BestSellers
