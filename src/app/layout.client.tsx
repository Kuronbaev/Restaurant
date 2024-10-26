'use client'
import { LanguageProvider } from '@/components/LanguageContext'
import LayoutSide from '@/components/Layout/LayoutSide'
import ReduxProvider from '@/providers/ReduxProvider'
import { FC, ReactNode } from 'react'

interface LayoutClientType {
	children: ReactNode
}

const LayoutClient: FC<LayoutClientType> = ({ children }) => {
	return (
		<div>
			<ReduxProvider>
				<LanguageProvider>
					<LayoutSide>{children}</LayoutSide>
				</LanguageProvider>
			</ReduxProvider>
		</div>
	)
}

export default LayoutClient
