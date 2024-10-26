'use client'
import FormInput from '@/components/ui/ModalWindow/FormInput'
import Template from '@/components/ui/Template'
import leftIcon from '@/images/leftIcon.png'
import rightIcon from '@/images/rightIcon.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import scss from './firstSection.module.scss'

const Delicious = () => {
	const [showForm, setShowForm] = useState(false)

	const handleButtonClick = () => {
		setShowForm(prev => !prev)
	}

	const handleBackdropClick = () => {
		setShowForm(false)
	}

	useEffect(() => {
		if (showForm) {
			document.body.style.overflow = 'hidden' // Отключить прокрутку
		} else {
			document.body.style.overflow = '' // Включить прокрутку
		}

		return () => {
			document.body.style.overflow = 'unset' // Очистка при размонтировании
		}
	}, [showForm])

	// Функция для разбивки текста на буквы
	const text = 'Italian Cuisine'
	const letters = text.split('')

	return (
		<section className={scss.FirstSection}>
			<div className='container'>
				<div className={scss.content}>
					{/* Темный фон для модалки */}
					{showForm && (
						<div
							className={`${scss.backdrop} ${showForm ? scss.show : ''}`}
							onClick={handleBackdropClick}
						></div>
					)}

					{/* Форма модалки */}
					<FormInput showForm={showForm} />
					<Template>
						{/* Основная секция с кнопкой вызова формы */}
						<div className={scss.mainBlock}>
							<div className={scss.hero}>
								<Image width={51} height={14} src={leftIcon} alt='photo' />
								<h1>Main Menu</h1>
								<Image width={51} height={14} src={rightIcon} alt='photo' />
							</div>

							{/* Анимация по буквам для текста Italian Cuisine */}
							<h1 className={scss.animatedText}>
								{letters.map((letter, index) => (
									<motion.span
										key={index}
										initial={{ y: 0, opacity: 0 }} // Начальная позиция
										animate={{
											// y: [-30, -30, -30], // Движение вверх и вниз
											// opacity: [0, 1, 1], // Изменение прозрачности
											opacity: 1,
											// rotate: [0, 10, -10, 0], // Легкое вращение
										}}
										transition={{
											duration: 0.6,
											delay: index * 0.1, // Задержка для каждой буквы
											type: 'spring', // Используем эффект пружины
											stiffness: 100, // Жесткость пружины
											repeat: Infinity, // Бесконечное повторение
											repeatType: 'loop', // Повторяем по кругу
										}}
									>
										{letter}
									</motion.span>
								))}
							</h1>

							<p>
								Classic steak & delicious with delightfully unexpected twists.
								The Restaurant's sunny decor was inspired by the diners.
							</p>
							<div className={scss.btn}>
								<hr />
								<button
									className={scss.formContact}
									onClick={handleButtonClick}
								>
									Reserve Your Table <FaArrowRight className={scss.arrow} />
								</button>
								<hr />
							</div>
						</div>
					</Template>

					{/* Контактная информация */}
					<div className={scss.contact}>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className={scss.location}
						>
							<h5>Location</h5>
							<hr />
							<span>Rua da moeda 1g, 1200-275, Portugal</span>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className={scss.location}
						>
							<h5>Hotline</h5>
							<hr />
							<span>+771219900</span>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Delicious
