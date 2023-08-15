'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

export default function Page() {
	const datas = require('/public/data.json');
	const [checkedItems, setCheckedItems] = useState<number[]>([]);
	const isSelectAllChecked = checkedItems.length === datas.length;

	const handleAllCheck = (checked: boolean) => {
		if (checked) {
			const idArr: number[] = datas.map((el: any) => el.id);
			setCheckedItems(idArr);
		} else {
			setCheckedItems([]);
		}
	};

	const handleSingleCheck = (checked: boolean, id: number) => {
		if (checked) {
			if (!checkedItems.includes(id)) {
				setCheckedItems((prev) => [...prev, id]);
			}
		} else {
			setCheckedItems((prev) => prev.filter((el) => el !== id));
		}
	};

	const handleSubmit = (e: FormEvent) => {
		if (!isSelectAllChecked) {
			e.preventDefault();
			alert('모든 약관에 동의해 주십시오.');
		}
	};

	return (
		<form action='/look-up/join/member' method='get' onSubmit={handleSubmit}>
			<h1 className='text-[28px] leading-8 py-3'>
				계속 진행하시려면 아래 권한에 동의해 주세요.
			</h1>
			<header>
				<div className='mt-1 mb-6 text-sm text-black'>
					<span className='font-light text-xs'> *</span> 필수 항목
				</div>
			</header>
			<p className='text-sm text-slate-400'>
				프로스타짐에 오신 것을 환영합니다! 법률 약관이 업데이트되었습니다.
				진행하시기 전에 내용을 검토하고 동의해 주세요.
			</p>
			<ul className='h-42 my-9 relative text-zinc-500'>
				<label>
					<input
						type='checkbox'
						id='select_all'
						name='select_all'
						onChange={(e) => handleAllCheck(e.target.checked)}
						checked={isSelectAllChecked}
					/>
					<b className='ml-3'>전체선택</b>
				</label>
				{datas.map(
					(data: { id: number; content: string; checked: boolean }) => (
						<li key={data.id}>
							<input
								type='checkbox'
								name={`select-${data.id}`}
								onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
								checked={checkedItems.includes(data.id)}
							/>
							<b className='underline ml-3'>{data.content}</b>에 동의합니다.
						</li>
					),
				)}
			</ul>
			<p className='text-sm text-slate-400'>
				이 약관에 동의하지 않을 수 있지만, 그럴 경우 프로스타짐 계정에 로그인할
				수 없으며 새로운 계정을 생성할 수도 없습니다.
			</p>
			<div className='flex justify-end w-[32rem] mx-auto p-6'>
				<Link href='/look-up'>
					<button className='border border-slate-300 px-4 py-3 rounded-full w-20 hover:border-black'>
						취소
					</button>
				</Link>
				<button
					className={`border bg-black hover:bg-slate-500 text-white ml-3 px-4 py-3 rounded-full w-20`}
					onClick={handleSubmit}>
					계속
				</button>
			</div>
		</form>
	);
}
