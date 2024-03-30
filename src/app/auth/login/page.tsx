'use client'
import type { NextPage } from 'next'
import dynamic from "next/dynamic";


const Auth = dynamic(() => import("@/screens/auth/Auth"), { ssr: false });

const page: NextPage = () => {
	return (
			<Auth type='login'/>
		)
}
export default page