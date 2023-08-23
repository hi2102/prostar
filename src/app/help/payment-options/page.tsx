export default function page() {
	return (
		<div className='h-screen px-20 py-10'>
			<h1>결제 방법에는 어떤 것이 있나요?</h1>
			<ol>
				<li>신용카드 / 체크카드</li>
				<li>카카오페이</li>
				<li>네이버페이</li>
				<li>실시간 계좌이체 (현금결제)</li>
			</ol>
			<p>단, 할인 품목은 현금으로 결제하고, 카드 결제시 수수료가 부과됩니다.</p>
		</div>
	);
}
