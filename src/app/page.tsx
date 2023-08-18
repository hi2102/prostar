import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
	const listItemImgs = require('../../public/listItemImgs.json');
	return (
		<div className='mx-12 antialiased'>
			<figure className='w-auto'>
				<Image
					priority
					src='/assets/mainEvent.png'
					width={1200}
					height={100}
					alt='main page adcertisement'
					className='w-full h-auto mb-12'
				/>
				<figcaption className='text-center text-neutral-900'>
					<h3 className='text-5xl text-black font-extrabold tracking-wider my-6'>
						새로운 계절 준비하기.
					</h3>
					<p>
						새로운 계절을 준비하는 프로스타 멤버들을 위한 혜택을 만나 보세요.
						<br />
						8월 한달 간 회원 등록 시, <br />
						할인 혜택을 드립니다.
						<br />
						<br />
						지난 달에 이어 진행되는 프로모션에 참여하여
						<br />
						전문가와 함께 건강을 지켜 보세요.
					</p>
				</figcaption>
			</figure>
			<div className='my-20'>
				<section className='grid grid-cols-3 gap-4'>
					{listItemImgs.map((listItem: ListItemGridProps) => (
						<ul key={listItem.id}>
							<ListItemGrid
								id={listItem.id}
								src={listItem.src}
								alt={listItem.title}
								title={listItem.title}
								description={listItem.description}
							/>
						</ul>
					))}
				</section>
			</div>
			<FindYourBody />
		</div>
	);
}

interface ListItemGridProps {
	id: number;
	src: string;
	alt: string;
	title: string;
	description: string;
}

function ListItemGrid({ id, src, title, description }: ListItemGridProps) {
	return (
		<li className='hover:cursor-pointer' key={id}>
			<Image
				priority
				src={src}
				width={1000}
				height={100}
				alt={`${title} image`}
				className='w-auto h-auto'
			/>
			<div className='my-7'>
				<h3 className='text-2xl font-semibold py-4'>{title}</h3>
				<p className='font-medium'>{description}</p>
			</div>
		</li>
	);
}

function FindYourBody() {
	return (
		<section className='text-center mb-36'>
			<figure>
				<Image
					src='/assets/woman-yoga.jpg'
					width={1200}
					height={100}
					alt='yoga pic'
					className='w-auto h-auto'
				/>
				<figcaption data-qa='card-overlay' className='my-10'>
					<div data-qa='card-overlay-content'>
						<p data-qa='subtitle' className='text-md font-medium my-2'>
							Find Your Body
						</p>
						<h3 data-qa='title' className='text-5xl font-extrabold mb-8'>
							나에게 꼭 맞는 운동법
						</h3>
						<p data-qa='body'>
							나에게 가장 맞는 운동법으로 바라던 퍼포먼스를.
							<br />
							간단한 테스트를 통해 나에게 꼭 맞는 운동법을 찾아보세요.{' '}
						</p>
						<div data-qa='cta-container'>
							<Link
								href='/find-your-body'
								target='_self'
								data-analytics-action-id='f6685e0d-7601-4241-8afa-6f02f786046a'
								data-analytics-allow='false'
								data-qa='cta-button'
								data-qa-card-id='fae98f84-ecd3-47b8-a0a9-f5451dfc99b5'
								tabIndex={0}
								data-actiontext='자세히 보기'
								data-button-type='button'
								aria-label='자세히 보기'>
								<button className='border border-black bg-black text-white hover:border-stone-500 hover:bg-stone-500 px-4 py-2 rounded-full mt-8'>
									자세히 보기
								</button>
							</Link>
						</div>
					</div>
				</figcaption>
			</figure>
		</section>
	);
}
