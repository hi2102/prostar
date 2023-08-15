import HeaderLogos from './headerLogos';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='h-screen mx-auto w-[32.75rem] px-8'>
			<HeaderLogos />
			<div>{children}</div>
		</div>
	);
}
