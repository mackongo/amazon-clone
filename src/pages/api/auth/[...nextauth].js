import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: '539227594184-73kn64g87vhm2abhfa9gu6pr95v6lddk.apps.googleusercontent.com',
      clientSecret: 'AwEspGOAUwSbfkoJr9GuKDCR'
    }),
  ],
});