import Dashboard from '@/screens/dashboard/Dashboard'
import type { NextPage } from 'next'
export async function generateMetadata() {
	return {
		title: `SwiftW | Dashboard`,
	}
}
const page: NextPage = () => {
	return <Dashboard />
}
export default page
