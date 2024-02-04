import { ReactNode, FC } from 'react'
import QueryProvider from './QueryProvider'

interface IMainProvider {
	children: ReactNode
}

const MainProvider: FC<IMainProvider> = ({ children }) => {
	return <QueryProvider>{children}</QueryProvider>
}

export default MainProvider
