export const baseUrl = process.env?.BASE_URL ?? `http://${process.env.VERCEL_URL}` ?? '';
export const appName = process.env?.APP_NAME ?? 'app';
