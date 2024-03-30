'use client' 
import { ReactNode, FC } from 'react'
import QueryProvider from './QueryProvider'
import { Provider } from 'react-redux'
import store from '@/store/store'

interface IMainProvider {
	children: ReactNode
}

const MainProvider: FC<IMainProvider> = ({ children }) => {
	return (
		<Provider store={store}>
			<QueryProvider>{children}</QueryProvider>
		</Provider>
	)
}

export default MainProvider
