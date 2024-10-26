import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import scss from './FormInput.module.scss'

interface FormData {
	name: string
	phone: string
}

const FormInput = ({ showForm }: { showForm: boolean }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>()

	const [isSuccess, setIsSuccess] = useState(false)

	const messageModel = (data: FormData) => {
		let messageTG = `Username: <strong> ${data.name}</strong>\n`
		messageTG += `Phone: <strong>${data.phone}</strong>\n`
		return messageTG
	}

	const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
		await axios.post(
			`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_G_TOKEN}/sendMessage`,
			{
				chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
				parse_mode: 'html',
				text: messageModel(data),
			}
		)
		reset()
		setIsSuccess(true)

		// Скрыть модалку через 3 секунды
		setTimeout(() => {
			setIsSuccess(false)
		}, 3000)
	}

	return (
		<div className={`${scss.formWrapper} ${showForm ? scss.show : ''}`}>
			<motion.form
				className={scss.form}
				onSubmit={handleSubmit(onSubmit)}
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: 100 }}
				transition={{ duration: 0.5 }}
			>
				<div className={scss.inputWrapper}>
					<span className={scss.circle}></span>
					<div className={scss.reserve}>
						<h1>NAME</h1>
						<input
							type='text'
							placeholder='Your Name'
							{...register('name', { required: true })}
						/>
						{errors.name && (
							<span className={scss.error}>This field is required</span>
						)}
					</div>
				</div>

				<div className={scss.inputWrapper}>
					<span className={scss.circle}></span>
					<div className={scss.reserve}>
						<h1>PHONE</h1>
						<input
							name='phone'
							{...register('phone', { required: true })}
							placeholder='Your Phone'
						/>
						{errors.phone && (
							<span className={scss.error}>This field is required</span>
						)}
					</div>
				</div>
				<button type='submit'>Contact</button>
			</motion.form>

			{/* Анимация для модалки успешной отправки */}
			<AnimatePresence>
				{isSuccess && (
					<motion.div
						className={scss.successModal}
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
					>
						<h2>Отправлено успешно!</h2>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default FormInput
