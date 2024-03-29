import { OAuthConfig, OAuthUserConfig } from 'next-auth/providers/oauth';
import CassoLogo from 'public/image/casso-favicon.ico';
import { baseUrl } from '@/constants/api';

export interface CassoProfile extends Record<string, unknown> {
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

export function CassoProvider<P extends CassoProfile>(options: OAuthUserConfig<P>): OAuthConfig<P> {
  return {
    id: 'casso',
    name: 'CASSO',
    type: 'oauth',
    wellKnown: 'https://casso.services.isca.jp/.well-known/openid-configuration',
    authorization: {
      params: { scope: 'openid email profile' },
    },
    idToken: true,
    checks: ['pkce', 'state', 'nonce'],
    profile(profile: CassoProfile) {
      return {
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: profile.picture,
      };
    },

    style: {
      logo: `${baseUrl}/${CassoLogo.src}`,
      logoDark: `${baseUrl}/${CassoLogo.src}`,
      bgDark: '#fff',
      bg: '#fff',
      text: '#000',
      textDark: '#000',
    },
    options,
  };
}
