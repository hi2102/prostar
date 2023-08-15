import Link from 'next/link';

export default function Page() {
	return (
		<nav className='flex items-center'>
			<Link href='/look-up'>
				<button className='border-none bg-slate-400 text-slate-100 rounded-lg px-4 py-2 m-4 hover:cursor-pointer hover:bg-slate-700'>
					회원가입
				</button>
			</Link>
		</nav>
	);
}
