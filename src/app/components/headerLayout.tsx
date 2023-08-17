'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
	return (
		<header className='flex justify-between items-center w-full px-12 py-1 bg-gray-100 '>
			<Link href='/'>
				<Image
					src='/assets/removeBgText.png'
					width={65}
					height={100}
					alt='logo'
					className='w-auto h-auto'
				/>
			</Link>
			<div className='flex gap-4 items-center'>
				<Link
					href='/retail'
					className='text-sm hover:cursor-pointer hover:text-slate-400 '>
					매장안내
				</Link>
				<div className='text-[1px]'>|</div>
				<Link
					href='/help'
					className='text-sm hover:cursor-pointer hover:text-slate-400 '>
					고객센터
				</Link>
				<div className='text-[1px]'>|</div>
				<Link
					href='/membership'
					className='text-sm hover:cursor-pointer hover:text-slate-400 '>
					가입하기
				</Link>

				<div className='text-[1px]'>|</div>
				<Link
					href='/look-up'
					className='text-sm hover:cursor-pointer hover:text-slate-400 '>
					로그인
				</Link>
			</div>
		</header>
	);
}
