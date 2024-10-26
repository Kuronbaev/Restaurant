// LanguageContext.tsx
import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext({
	lang: 'en',
	setLang: (lang: string) => {},
})

export const LanguageProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [lang, setLang] = useState('en')

	useEffect(() => {
		const savedLang = localStorage.getItem('language') // Получение языка из localStorage
		if (savedLang) {
			setLang(savedLang) // Установка сохраненного языка в состояние
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('language', lang) // Сохранение языка в localStorage при изменении
	}, [lang])

	return (
		<LanguageContext.Provider value={{ lang, setLang }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => {
	return useContext(LanguageContext)
}
