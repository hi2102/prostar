import Image from 'next/image';

export default function HeaderLogos() {
	return (
		<section>
			<div className='flex items-center h-[100px] gap-4'>
				<Image
					src={'/asset/logo.png'}
					width={60}
					height={60}
					alt='logo image'
					className='w-auto h-auto'
				/>
				<Image
					src={'/asset/logo-ko.png'}
					width={160}
					height={100}
					alt='logo text image'
					className='translate-y-1 w-auto h-auto'
				/>
			</div>
		</section>
	);
}
