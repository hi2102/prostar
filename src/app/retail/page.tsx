import MyMap from '../components/kakao/map';

export default function Page() {
	const openClose = [
		{ datename: '일', work: '휴무' },
		{ datename: '월', open: '06:00', closed: '22:30' },
		{ datename: '화', open: '06:00', closed: '22:30' },
		{ datename: '수', open: '06:00', closed: '22:30' },
		{ datename: '목', open: '06:00', closed: '22:30' },
		{ datename: '금', open: '06:00', closed: '22:30' },
		{ datename: '토', open: '06:00', closed: '18:00' },
	];
	const d = new Date();
	const year = d.getFullYear();
	const month = d.getMonth();
	const getToday = d.getDate();

	const today = new Date(year, month, getToday).getDay();
	const week = ['일', '월', '화', '수', '목', '금', '토'];
	const todayLabel = week[today];

	const result = [...openClose].filter((d) => d.datename === todayLabel);

	const endTime = Number(result[0].closed?.slice(0, 2));
	const nowTime = new Date().getHours();

	return (
		<div className='antialiased'>
			<section className='p-2'>
				<h1 className='p-4 my-4 font-semibold text-2xl'>
					프로스타짐 고창점 매장 위치
				</h1>
				<section>
					<dl className='p-4 text-neutral-500 flex flex-col gap-2'>
						<dt className='font-semibold text-xl text-neutral-800'>고창</dt>
						<dd className='font-medium'>고창읍 보릿골로 85 2층</dd>
						<dd className='font-medium'>고창군, 전라북도, 56438, KR</dd>
						<dd className='font-medium'>
							<span className={endTime < nowTime ? '' : 'text-emerald-500'}>
								{endTime < nowTime ? '영업 종료' : '영업 중'}
							</span>
							{result.map((result) => (
								<span key={result.datename}>
									<span> • 영업 종료 시간 : </span>
									<span>{result.closed}</span>
								</span>
							))}
						</dd>
					</dl>
					{/* <dl className='p-4'>
						<dt className='font-semibold'>정읍</dt>
						<dd>주소 1</dd>
						<dd>주소 2</dd>
						<dd>영업시간</dd>
					</dl> */}
				</section>
			</section>
			<div className='mt-4 mb-12 mx-4'>
				<div className='border border-collapse border-black aspect-video transition-all duration-500 hover:aspect-square flex items-center justify-center'>
					여기에 지도
					{/* <MyMap latitude={35.43301109999909} longitude={126.6867783790415} /> */}
				</div>
			</div>
		</div>
	);
}
