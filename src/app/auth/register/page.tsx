import Link from 'next/link'

export default function Page() {
	return (
		<>
			<div>
				<p className='flex items-center gap-2'>
					Auth {'->'} <Link href={'/register'}>Register</Link> {'->'} Page
				</p>
				or
				<p className='flex items-center gap-2'>
					Auth {'->'} <Link href={'/login'}>Login</Link> {'->'} Page
				</p>
			</div>
		</>
	)
}
