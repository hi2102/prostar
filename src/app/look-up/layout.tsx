export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className='h-screen mt-20 mx-auto w-[32.75rem] px-8'>{children}</div>
		</>
	);
}
