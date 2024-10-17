"use client"
import LayoutSide from '@/components/Layout/LayoutSide'
import ReduxProvider from '@/providers/ReduxProvider'
import React, { FC, ReactNode } from 'react'

interface LayoutClientType {
  children: ReactNode
}

const LayoutClient: FC<LayoutClientType> = ({children}) => {
  return (
    <div>
     <ReduxProvider>
			<LayoutSide>{children}</LayoutSide>
		</ReduxProvider>
    </div>
  )
}

export default LayoutClient