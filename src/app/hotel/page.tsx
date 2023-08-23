'use client';
import Image from 'next/image';
import { SyntheticEvent, useState } from 'react';

export default function Page() {
	const [imgSrc, setImgSrc] = useState(0);
	// const [btnState, setBtnState] = useState(true);
	const imgsArr = ['01.jpg', '02.jpg', '03.png', '04.jpg', '05.png'];
	function handleNextClick(e: SyntheticEvent) {
		e.preventDefault();
		if (imgSrc < imgsArr.length - 1) {
			setImgSrc((currentSrc) => currentSrc + 1);
		} else {
			setImgSrc((currentSrc) => (currentSrc = 1));
		}
	}
	function handlePrevClick(e: SyntheticEvent) {
		e.preventDefault();
		if (imgSrc > 0) {
			setImgSrc((currentSrc) => currentSrc - 1);
		} else {
			setImgSrc((currentSrc) => (currentSrc = 4));
		}
	}

	return (
		<>
			<div className='w-[500vw] flex'>
				{imgsArr.map((img) => (
					<div key={img} style={{ transform: `translateX(-${imgSrc}00vw)` }}>
						<ShowImages src={`/assets/fitness/fitness_${img}`} />
					</div>
				))}
			</div>
			<div className='text-center my-8 py-4'>
				<button
					className='bg-neutral-400 text-white px-8 py-4 rounded-full mr-4'
					onClick={handlePrevClick}>
					prev
				</button>
				<button
					className='bg-neutral-400 text-white px-8 py-4 rounded-full ml-4'
					onClick={handleNextClick}>
					next
				</button>
			</div>
		</>
	);
}

interface ShowImagesProps {
	src: string;
}

function ShowImages({ src }: ShowImagesProps) {
	return (
		<Image
			className='w-[100vw] h-[50vh]'
			src={src}
			width={1000}
			height={100}
			alt='hotel image'
			priority
		/>
	);
}
