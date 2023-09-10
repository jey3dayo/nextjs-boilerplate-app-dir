import { Container } from '@/components/container';
import { getCurrentUser } from '@/lib/next-auth/session';

export default async function Page() {
  const currentUser = await getCurrentUser();

  return (
    <main>
      <Container>
        <pre>{JSON.stringify(currentUser, null, 2)}</pre>
      </Container>
    </main>
  );
}
