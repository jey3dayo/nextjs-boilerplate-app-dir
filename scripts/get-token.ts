import { Payload } from '@/types/jose';
import { getOptions, signJwt, verifyJwt } from '@/lib/token';

// User.id
// const userId = 'clj3utoac0000h9g61v0ow4gu';
const args = process.argv.slice(2);
const userId = args?.[0] ?? 'empty';

const input: Payload = { id: userId };

async function main() {
  const env = process.env;
  const secret = env.NEXTAUTH_SECRET;
  const appName = env.NEXT_PUBLIC_APP_NAME;
  if (!(secret && appName)) return;

  const options = getOptions(secret, appName);
  const jwt = await signJwt(input, options);
  const payload = await verifyJwt(jwt, options);
  console.log({ jwt, payload });
}
main();
