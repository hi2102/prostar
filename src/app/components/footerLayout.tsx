'use client';

import { useRouter } from 'next/navigation';

export default function FooterLayout() {
	const router = useRouter();
	console.log(router);
	return (
		<footer className='mt-auto w-full h-auto bg-black text-white p-10 text-sm tracking-wide antialiased '>
			<div className='grid grid-cols-5 w-full mb-8'>
				<div>
					<div className='mb-4 hover:text-white hover:cursor-pointer'>
						새로운 소식
					</div>
					<div className='mb-4 hover:text-white hover:cursor-pointer'>
						멤버가입
					</div>
					<div className='mb-4 hover:text-white hover:cursor-pointer'>
						매장안내
					</div>
					<div className='hover:text-white hover:cursor-pointer'>오시는길</div>
				</div>
				<div>
					<div className='mb-4 hover:text-white hover:cursor-pointer'>
						도움말
					</div>
					<div className='text-gray-400 text-xs'>
						<div className='mb-4 hover:text-white hover:cursor-pointer'>
							로그인 안내
						</div>
						<div className='mb-4 hover:text-white hover:cursor-pointer'>
							결제 방법
						</div>
						<div className='mb-4 hover:text-white hover:cursor-pointer'>
							공지사항
						</div>
						<div className='mb-4 hover:text-white hover:cursor-pointer'>
							문의하기
						</div>
					</div>
				</div>
				<div>
					<div className='mb-4 uppercase hover:text-white hover:cursor-pointer'>
						about prostar
					</div>
					<div className='text-gray-400 text-xs'>
						<div className='mb-4 hover:text-white hover:cursor-pointer'>
							소식
						</div>
						<div className='mb-4 hover:text-white hover:cursor-pointer'>
							채용
						</div>
						<div className='mb-4 hover:text-white hover:cursor-pointer'>
							투자자
						</div>
						<div className='mb-4 hover:text-white hover:cursor-pointer'>
							지속가능성
						</div>
					</div>
				</div>
				<div></div>
				<div className='flex flex-row-reverse'>
					<div className='container px-6 pt-6'>
						<div className='mb-6 flex justify-center'>
							<a
								href='#!'
								type='button'
								className='m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0'
								data-te-ripple-init
								data-te-ripple-color='light'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='mx-auto h-full w-4'
									fill='currentColor'
									viewBox='0 0 24 24'>
									<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
								</svg>
							</a>

							<a
								href='#!'
								type='button'
								className='m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0'
								data-te-ripple-init
								data-te-ripple-color='light'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='mx-auto h-full w-4'
									fill='currentColor'
									viewBox='0 0 24 24'>
									<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
			<section className='text-gray-400'>
				<ul className='flex justify-end gap-8 my-4'>
					<li>
						<a
							className='hover:text-white'
							target='_blank'
							aria-label='이용약관'
							data-type='click_navFooter'
							data-path='terms of use'
							href='https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&amp;uxId=com.nike.commerce.nikedotcom.web&amp;country=KR&amp;language=ko&amp;requestType=redirect'
							data-pre='ILink'>
							이용약관
						</a>
					</li>
					<li>
						<a
							className='text-white'
							target='_blank'
							aria-label='개인정보처리방침'
							data-type='click_navFooter'
							data-path='privacy policy'
							href='https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacy-policy&amp;uxId=default&amp;country=KR&amp;language=ko&amp;requestType=redirect'
							data-pre='ILink'>
							<div>개인정보처리방침</div>
						</a>
					</li>
					<li>
						<a
							className='hover:text-white'
							target='_blank'
							aria-label='위치 기반 서비스 약관'
							data-type='click_navFooter'
							data-path='location service'
							href='https://agreementservice.svs.nike.com/rest/agreement?agreementType=lbsProvider&amp;uxId=com.nike.commerce.nikedotcom.web&amp;country=KR&amp;language=ko&amp;requestType=redirect'
							data-pre='ILink'>
							위치 기반 서비스 약관
						</a>
					</li>
				</ul>
				<div className='flex justify-between mb-4 pt-4'>
					<div className='flex gap-4'>
						<div className='text-white flex items-center gap-2'>
							<a
								aria-label='선택된 위치: 대한민국'
								title='선택된 위치: 대한민국'
								data-pre='ILink'
								href='//www.nike.com/language_tunnel'>
								<svg
									aria-hidden='true'
									focusable='false'
									viewBox='0 0 24 24'
									role='img'
									width='18px'
									height='15px'
									fill='none'>
									<path
										fill='currentColor'
										fill-rule='evenodd'
										d='M4.5 9.001a7.5 7.5 0 1115 0c0 1.205-.385 2.576-.934 3.928-.555 1.364-1.302 2.767-2.08 4.055a39.918 39.918 0 01-2.307 3.405c-.688.905-1.316 1.632-1.711 1.947a.75.75 0 01-.936 0c-.395-.315-1.023-1.042-1.711-1.947a39.916 39.916 0 01-2.306-3.405c-.78-1.288-1.526-2.691-2.08-4.056-.55-1.351-.935-2.722-.935-3.927zM12 12.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z'
										clip-rule='evenodd'></path>
								</svg>
							</a>
							<span>대한민국</span>
						</div>
						<div>© 2023 Prostar Gym, Inc. All Rights Reserved</div>
					</div>
					<ul>
						<li>
							<a
								className='hover:text-white'
								target='_blank'
								aria-label='영상정보처리기기 운영 방침'
								data-type='click_navFooter'
								data-path='영상정보처리기기 운영 방침'
								href='https://agreementservice.svs.nike.com/rest/agreement?agreementType=CCTVpolicy&amp;uxId=com.nike.cctvpolicy&amp;country=KR&amp;language=ko&amp;requestType=redirect'>
								영상정보처리기기 운영 방침
							</a>
						</li>
					</ul>
				</div>
			</section>
			<hr className='border-zinc-400' />
			{/* <section className='border border-white'>
				<div>
					<span id='sub_footer_business_information_text'>
						(유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창
						멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층 |
						통신판매업신고번호 2011-서울강남-03461 | 등록번호{' '}
						<span data-var='koreanBusinessInfoPhone'>220-88-09068</span>
					</span>
					<a
						data-var='koreanBusinessInfoLink'
						target='_blank'
						data-type='click_navFooter'
						data-path='business information confirmation'
						href='https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2208809068'
						data-pre='ILink'>
						<span id='sub_footer_business_information_link_text'>
							사업자 정보 확인
						</span>
					</a>
					<div>
						<span id='sub_footer_customer_service_text'>
							고객센터 전화 문의{' '}
							<a
								data-var='koreanCustomerServicePhone'
								data-type='click_navFooter'
								data-path='customer service phone'
								href='tel:080-022-0182'
								data-pre='ILink'>
								080-022-0182
							</a>{' '}
							FAX <span data-var='koreanCustomerServiceFax'>02-6744-5880</span>{' '}
							| 이메일{' '}
							<a
								data-var='koreanCustomerServiceEmail'
								data-type='click_navFooter'
								data-path='customer service email'
								href='mailto:service@nike.co.kr'
								data-pre='ILink'>
								service@nike.co.kr
							</a>{' '}
							| 호스팅서비스사업자 (유)나이키코리아
						</span>
					</div>
				</div>
			</section> */}
		</footer>
	);
}
