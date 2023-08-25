import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: {
					label: '이메일',
					type: 'text',
					placeholder: '이메일 주소 입력 요망',
				},
				password: { label: '비밀번호', type: 'password' },
			},
			async authorize(credentials, req) {
				const user = await (
					await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {})
				).json();

				console.log(user);

				if (user) {
					return user;
				} else {
					return null;
				}
			},
		}),
		KakaoProvider({
			clientId: process.env.KAKAO_CLIENT_ID!,
			clientSecret: process.env.KAKAO_CLIENT_SECRET!,
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},

		async session({ session, token }) {
			session.user = token as any;
			return session;
		},
	},
});

export { handler as GET, handler as POST };
