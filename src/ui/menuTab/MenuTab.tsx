'use client'
import React, { useState } from 'react'
import scss from './menuTab.module.scss'

const MenuTab = () => {
	const [activeIndex, setActiveIndex] = useState<null | number>(null)

	const handleTabClick = (index: null | number) => {
		setActiveIndex(index)
	}

	return (
		<div className={scss.MenuTab}>
			<div className={scss.container}>
				<div className={scss.content}>
					<ul>
						<li
							className={activeIndex === 0 ? scss.activeBtn : scss.defBtn}
							onClick={() => handleTabClick(0)}
						>
							Desserts
						</li>
						<hr style={{ width: '200px', opacity: '0.2' }} />
						<li
							className={activeIndex === 1 ? scss.activeBtn : scss.defBtn}
							onClick={() => handleTabClick(1)}
						>
							Hot Drinks
						</li>
						<hr style={{ width: '200px', opacity: '0.2' }} />
						<li
							className={activeIndex === 2 ? scss.activeBtn : scss.defBtn}
							onClick={() => handleTabClick(2)}
						>
							Cold Drinks
						</li>
						<hr style={{ width: '200px', opacity: '0.2' }} />

						<li
							className={activeIndex === 3 ? scss.activeBtn : scss.defBtn}
							onClick={() => handleTabClick(3)}
						>
							National Foods
						</li>
						<hr style={{ width: '200px', opacity: '0.2' }} />

						<li
							className={activeIndex === 4 ? scss.activeBtn : scss.defBtn}
							onClick={() => handleTabClick(4)}
						>
							Eastern Cuisine
						</li>
						<hr style={{ width: '200px', opacity: '0.2' }} />

						<li
							className={activeIndex === 5 ? scss.activeBtn : scss.defBtn}
							onClick={() => handleTabClick(5)}
						>
							Fast Foods
						</li>
						<hr style={{ width: '200px', opacity: '0.2' }} />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default MenuTab
