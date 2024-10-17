import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import scss from './LayoutSide.module.scss'
import { FC } from 'react'

interface LayoutProps {
  children: React.ReactNode
}
const LayoutSide: FC<LayoutProps> = ({children}) => {
  return (
    <div className={scss.LayoutSide}>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default LayoutSide