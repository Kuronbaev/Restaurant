'use client'
import leftIcon from '@/images/leftIcon.png'
import rightIcon from '@/images/rightIcon.png'
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
					<div className={`${scss.formWrapper} ${showForm ? scss.show : ''}`}>
						<div className={scss.form}>
							<div className={scss.inputWrapper}>
								<span className={scss.circle}></span>
								<div className={scss.reserve}>
									<h1>NAME</h1>
									<input type='text' placeholder='Your Name' />
								</div>
							</div>

							<div className={scss.inputWrapper}>
								<span className={scss.circle}></span>
								<div className={scss.reserve}>
									<h1>PHONE</h1>
									<input type='tel' placeholder='Your Phone' />
								</div>
							</div>
							<button>Contact</button>
						</div>
					</div>

					{/* Основная секция с кнопкой вызова формы */}
					<div className={scss.mainBlock}>
						<div className={scss.hero}>
							<Image width={51} height={14} src={leftIcon} alt='photo' />
							<h1>Main Menu</h1>
							<Image width={51} height={14} src={rightIcon} alt='photo' />
						</div>

						<h1>Italian Cuisine</h1>
						<p>
							Classic steak & delicious with delightfully unexpected twists. The
							Restaurant's sunny decor was inspired by the diners.
						</p>
						<div className={scss.btn}>
							<hr />
							<button className={scss.formContact} onClick={handleButtonClick}>
								Reserve Your Table <FaArrowRight className={scss.arrow} />
							</button>
							<hr />
						</div>
					</div>

					{/* Контактная информация */}
					<div className={scss.contact}>
						<div className={scss.location}>
							<h5>Location</h5>
							<hr />
							<span>Rua da moeda 1g, 1200-275, Portugal</span>
						</div>
						<div className={scss.location}>
							<h5>Hotline</h5>
							<hr />
							<span>+771219900</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Delicious
