import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
export const queryClient = new QueryClient()

interface IQueryProvider {
	children: ReactNode
}

const QueryProvider: FC<IQueryProvider> = ({ children }) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
export default QueryProvider
