'use client'
import { motion } from 'framer-motion'
import scss from './Loader.module.scss'

const Loader = () => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.5 }}
		className={scss.loading} // изменено на правильный класс
	>
		<div>Loading</div>
	</motion.div>
)

export default Loader
