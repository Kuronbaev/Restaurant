import scss from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={scss.Footer}>
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
								Telegram
							</a>
							<a href='#'>Instagram</a>
						</nav>
					</div>
					<hr />
					<span>C 2023 Motion Study LLC</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
