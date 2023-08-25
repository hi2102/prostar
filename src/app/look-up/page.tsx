'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from '../../../public/assets/spinner.svg';

import { LoginButton } from '../components/nextAuthButton';

interface FormState {
	state: boolean;
	inputValue: string;
	loading: boolean;
}

export default function SignIn() {
	const [formState, setFormState] = useState<FormState>({
		state: false,
		inputValue: '',
		loading: false,
	});

	const router = useRouter();

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (
			formState.inputValue !== '' &&
			/\S+@\S+\.\S+/.test(formState.inputValue)
		) {
			setFormState({
				...formState,
				state: true,
				loading: true,
			});
			router.push('/look-up/join');
		} else {
			setFormState({
				...formState,
				state: false,
				loading: false,
			});
		}
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setFormState({
			...formState,
			inputValue: e.target.value,
		});
	}

	return (
		<div className='mt-20 mb-20 mx-auto w-[32.75rem] px-8'>
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
					<b className='underline underline-offset-auto'>개인정보 처리방침</b>{' '}
					및 <b className='underline underline-offset-auto'>이용약관</b>에
					동의하게 됩니다.
				</p>
				<div className='flex justify-end mt-20'>
					<button className=' bg-black text-white px-7 py-3 rounded-full'>
						{!formState.loading ? (
							'계속'
						) : (
							// eslint-disable-next-line @next/next/no-img-element
							<img
								src={Spinner.src}
								width={28}
								alt='loading spinner'
								className='animate-spin disabled:opacity-75'
							/>
						)}
					</button>
				</div>
			</form>
			<section className='my-20'>
				<LoginButton />
			</section>
		</div>
	);
}
