import 'server-only';
import getConfig from 'next/config';

export const appSecret = getConfig()?.serverRuntimeConfig.env ?? 'development';
