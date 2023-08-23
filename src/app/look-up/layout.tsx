import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<div className='h-screen mt-20 mb-20 mx-auto w-[32.75rem] px-8'>
				{children}
			</div>
		</>
	);
}
