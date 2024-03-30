'use client'
import dynamic from 'next/dynamic'

const Auth = dynamic(() => import('@/screens/auth/Auth'), { ssr: false })

export default function Page() {
	return <Auth type="register" />
}
