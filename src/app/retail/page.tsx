import Link from 'next/link';

export default function Page() {
	return (
		<>
			<h1>this is retail page</h1>
			<Link href='/'>
				<button>go to home</button>
			</Link>
		</>
	);
}
