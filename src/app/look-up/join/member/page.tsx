/* eslint-disable @next/next/no-img-element */
export default function Page() {
	return (
		<>
			<header className='text-[28px] leading-8 py-3 mb-6 '>
				이제 프로스타짐의 멤버가 되어볼까요?
			</header>
			<form action='#' method='post'>
				<div className='flex gap-5 mb-2'>
					{' '}
					<input
						type='text'
						className='border border-black rounded-lg px-2 py-4 w-full'
						placeholder='성'
					/>
					<input
						type='text'
						className='border border-black rounded-lg px-2 py-4 w-full'
						placeholder='이름'
					/>
				</div>
				<div className='my-6'>
					<input
						type='text'
						placeholder='비밀번호'
						className='border border-black w-full px-2 py-4 rounded-lg'
					/>
				</div>

				<select className='border border-black w-full px-2 py-4 rounded-lg'>
					<option>성별</option>
					<option>남자</option>
					<option>여자</option>
				</select>
				<div className='my-4'>
					<input
						required
						type='date'
						className='border border-black text-sm rounded-lg w-full px-2 py-4 '
						placeholder='Select date'
						min='1920-01-01'
						max='2023-12-31'
					/>
				</div>
				<div className='my-8'>
					<input type='checkbox' id='agree' className='mr-4 p-4' />
					<label htmlFor='agree'>
						나이키의 <b className='underline'>개인정보 처리방침</b> 및{' '}
						<b className='underline'>이용약관</b>에 동의 합니다.
					</label>
				</div>
				<button className='float-right bg-black text-white hover:bg-zinc-500 rounded-full px-4 py-2'>
					계정 만들기
				</button>
			</form>
		</>
	);
}
