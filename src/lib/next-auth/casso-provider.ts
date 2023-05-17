import { OAuthConfig, OAuthUserConfig } from 'next-auth/providers/oauth';
// import CassoLogo from '@/src/lib/next-auth/casso-favicon.ico';
import CassoLogo from '../../../public/casso-favicon.ico';
import { env } from '@/env.mjs';

export interface CassoProfile extends Record<string, any> {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  hd: string;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nbf: number;
  picture: string;
  sub: string;
}

export default function Casso<P extends CassoProfile>(options: OAuthUserConfig<P>): OAuthConfig<P> {
  return {
    id: 'casso',
    name: 'CASSO',
    type: 'oauth',
    wellKnown: 'https://casso.services.isca.jp/.well-known/openid-configuration',
    authorization: {
      params: { scope: 'openid email profile' },
    },
    idToken: true,
    checks: ['pkce', 'state'],
    profile(profile: CassoProfile) {
      return {
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: profile.picture,
      };
    },

    style: {
      logo: `${env.BASE_URL}/${CassoLogo.src}`,
      logoDark: `${env.BASE_URL}/${CassoLogo.src}`,
      bgDark: '#fff',
      bg: '#fff',
      text: '#000',
      textDark: '#000',
    },
    options,
  };
}
