'use client';

import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import Spinner from '/public/asset/spinner.svg';

export default function SignIn() {
	const [formState, setFormState] = useState({
		state: false,
		inputValue: '',
		loading: false,
	});

	function handleSubmit(e: FormEvent) {
		if (
			formState.inputValue !== '' &&
			formState.inputValue.match(/\S+@+\S\.+\S+/)
		) {
			setFormState({
				...formState,
				state: true,
				loading: true,
			});
		} else {
			setFormState({
				...formState,
				state: false,
				loading: false,
			});
		}
		e.stopPropagation();
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		setFormState({
			...formState,
			inputValue: e.target.value,
		});
	}
	return (
		<form
			action={formState.state === true ? 'look-up/join' : ''}
			onSubmit={handleSubmit}>
			<h1 className='text-[28px] leading-8 py-3 mb-6'>
				가입 또는 로그인을 위해 이메일을 입력하세요.
			</h1>
			<input
				required
				type='email'
				placeholder='이메일'
				className='border border-slate-500 w-full px-2 py-4 rounded-lg my-2 mb-14'
				onChange={handleChange}
			/>
			<p className='text-neutral-400 '>
				계속 진행하면 프로스타짐의{' '}
				<b className='underline underline-offset-auto'>개인정보 처리방침</b> 및{' '}
				<b className='underline underline-offset-auto'>이용약관</b>에 동의하게
				됩니다.
			</p>
			<button className='float-right mt-16 bg-black text-white px-7 py-3 rounded-full'>
				{!formState.loading === true ? (
					'계속'
				) : (
					<Image
						src={Spinner}
						width={28}
						alt='loading spinner'
						className='animate-spin disabled:opacity-75 w-auto'
					/>
				)}
			</button>
		</form>
	);
}

// import { ChangeEvent, FormEvent, useState } from 'react';
// import Image from 'next/image';
// import Spinner from '/public/asset/spinner.svg';

// export default function SignIn() {
// 	const [inputValue, setInputValue] = useState('');
// 	const [loading, setLoading] = useState(false);
// 	const isValidEmail = /\S+@\S+\.\S+/.test(inputValue);

// 	const handleSubmit = (e: FormEvent) => {
// 		e.preventDefault();

// 		if (inputValue && isValidEmail) {
// 			setLoading(true);
// 		}
// 	};

// 	return (
// 		<form action={isValidEmail ? 'look-up/join' : ''} onSubmit={handleSubmit}>
// 			<h1 className='text-[28px] leading-8 py-3 mb-6'>
// 				가입 또는 로그인을 위해 이메일을 입력하세요.
// 			</h1>
// 			<input
// 				required
// 				type='email'
// 				placeholder='이메일'
// 				className='border border-slate-500 w-full px-2 py-4 rounded-lg my-2 mb-14'
// 				value={inputValue}
// 				onChange={(e: ChangeEvent<HTMLInputElement>) =>
// 					setInputValue(e.target.value)
// 				}
// 			/>
// 			<p className='text-neutral-400'>
// 				계속 진행하면 프로스타짐의{' '}
// 				<b className='underline underline-offset-auto'>개인정보 처리방침</b> 및{' '}
// 				<b className='underline underline-offset-auto'>이용약관</b>에 동의하게
// 				됩니다.
// 			</p>
// 			<button className='float-right mt-16 bg-black text-white px-7 py-3 rounded-full'>
// 				{loading ? (
// 					<Image
// 						src={Spinner}
// 						width={28}
// 						alt='loading spinner'
// 						className='animate-spin disabled:opacity-75 w-auto'
// 					/>
// 				) : (
// 					'계속'
// 				)}
// 			</button>
// 		</form>
// 	);
// }
