import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
	return (
		<div>
			<hr />
			<div className='mx-12 my-6'>
				<section className='text-center'>
					<Image
						src={'/assets/textTitle.svg'}
						width={1200}
						height={100}
						alt='text title'
						className='w-full h-full'
					/>
					<SignInBtn />
				</section>
				<section>
					<Image
						src='/assets/sampleGif.gif'
						width={1200}
						height={100}
						alt='video'
						className='w-full h-full pt-20 pb-12'
					/>
				</section>
				<figure>
					<h3 className='text-2xl font-medium tracking-wider mb-3'>
						주요 매장 서비스 안내
					</h3>
					<div className='w-full h-[40rem] bg-stone-100'>
						<div className='grid grid-cols-2 h-full'>
							<figcaption className='w-full h-full flex flex-col justify-end p-10'>
								<p className='mb-8 text-xl'>
									회원 체형 분석부터 스타일링까지.
									<br />
									프로스타짐 <strong>고창</strong>점에서 제공하는 특별하고
									<br />
									건강한 서비스를 만나 보세요.
								</p>
								<Link
									href='/membership/store'
									className='underline underline-offset-4 decoration-1 text-lg hover:text-neutral-500'>
									자세히 보기
								</Link>
							</figcaption>
							<div className='flex justify-center items-center bg-neutral-200'>
								images
							</div>
						</div>
					</div>
				</figure>
				<section className='mb-60'>
					<h1 className='text-2xl pt-4 pb-16'>프로스타 멤버십</h1>
					<div className='flex flex-col h-72 overflow-hidden'>
						<div className='h-full flex  flex-col-reverse items-center text-5xl tracking-wide'>
							<strong>우리 모두 건강으로 하나되는 곳</strong>
						</div>
						<div className='h-full flex flex-col-reverse items-center'>
							<p>프로스타짐과 함께 새로운 미래를 만들어 보세요.</p>
							<p>프로스타짐의 멤버가 되어 최고의 선생님들과 함께,</p>
							<p>새롭게 도전하고 일상 속 활력을 찾아보세요.</p>
						</div>
						<div className='h-full flex flex-col-reverse items-center'>
							<SignInBtn />
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

function SignInBtn() {
	return (
		<Link href='/look-up'>
			<button className='border border-black bg-black text-white px-6 py-2 rounded-full hover:bg-neutral-400 hover:border-neutral-400'>
				멤버 가입하기
			</button>
		</Link>
	);
}
