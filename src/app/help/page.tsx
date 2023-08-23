import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
	return (
		<>
			<section className='mx-20 mt-10'>
				<div className='m-4'>
					<h1 className='text-2xl font-semibold pb-2'>빠른 지원</h1>
					<p>클릭 한 번으로 자주 묻는 질문에 대한 답변을 확인할 수 있습니다.</p>
					<hr className='my-4' />
				</div>
				<div className='m-4 grid grid-cols-3'>
					<dl className='leading-8'>
						<dt>
							<h3 className='font-medium'>결제 및 환불</h3>
						</dt>
						<dd>결제를 취소하거나 환불할 수 있나요?</dd>
						<dd>결제 방법에는 어떤것이 있나요?</dd>
						<dd>프로스타짐의 환불정책은 어떻게 되나요?</dd>
						<dd>프로스타짐의 환불절차는 어떻게 되나요?</dd>
					</dl>
					<dl className='leading-8'>
						<dt>
							<h3 className='font-medium'>프로스타 멤버십</h3>
						</dt>
						<dd>프로스타짐 멤버가 되면 어떤 혜택을 받나요?</dd>
						<dd>나의 정보는 어떻게 알 수 있나요?</dd>
					</dl>
					<dl className='leading-8'>
						<dt>
							<h3 className='font-medium'>공지</h3>
						</dt>
						<dd>공지사항 및 고객알림</dd>
					</dl>
				</div>
			</section>
			<section className='mx-20 mt-28 mb-40'>
				<div className='m-4'>
					<h2 className='text-2xl font-semibold pb-2'>문의하기</h2>
					<hr className='my-4' />
				</div>
				<div className='w-full grid grid-cols-3 place-items-center'>
					<QuestionToProstar
						src='https://www.nike.com/assets/experience/dotcom-member/gethelpfe-webshell/_next/static/images/chat.png'
						alt='question call'
						title='문의 전화'
						link='#'
						specificInfoOne='0507-1328-9673'
						specificInfoTwo='9:00 - 20:00'
						specificInfoThree='월요일 - 토요일'
					/>
					<QuestionToProstar
						src='/assets/pngwing.com.png'
						alt='find shop'
						title='매장 찾기'
						link='#'
						specificInfoOne='프로스타짐 오시는 길'
					/>
					<QuestionToProstar
						src='/assets/pngwing.com.png'
						alt='find shop'
						title='매장 찾기'
						link='#'
						specificInfoOne='프로스타짐 오시는 길'
					/>
				</div>
			</section>
		</>
	);
}

interface QuestionToProstarProps {
	src: string;
	title: string;
	alt: string;
	link: string;
	specificInfoOne: string;
	specificInfoTwo?: string;
	specificInfoThree?: string;
}

function QuestionToProstar({
	src,
	title,
	alt,
	link,
	specificInfoOne,
	specificInfoTwo,
	specificInfoThree,
}: QuestionToProstarProps) {
	return (
		<Link href={link} className='grid grid-rows-2 place-items-center w-fit'>
			<Image
				src={src}
				width={68}
				height={100}
				alt={`${alt} image`}
				className='h-auto'
			/>
			<div className='text-center'>
				<h3>{title}</h3>
				<span>
					{specificInfoOne}
					<br />
					{specificInfoTwo}
					<br />
					{specificInfoThree}
				</span>
			</div>
		</Link>
	);
}
