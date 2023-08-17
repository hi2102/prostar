import Link from 'next/link';

export default function Page() {
	return (
		<>
			<Link href='/'>
				<button>go to home</button>
			</Link>
			<h1>this is help page</h1>
		</>
	);
}
