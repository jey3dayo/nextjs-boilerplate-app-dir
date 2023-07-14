import { DenyMessage } from '@/components/deny-message';
import { messages } from '@/constants/messages';
import { checkAdmin } from '@/lib/next-auth/role';
import { getCurrentUser } from '@/lib/next-auth/session';

async function AdminOnly(props: ReactProps) {
  const user = await getCurrentUser();
  return checkAdmin(user?.role) ? <>{props.children}</> : <DenyMessage message={messages.adminOnly} />;
}

async function UserOnly(props: ReactProps) {
  const user = await getCurrentUser();
  return user ? <>{props.children}</> : <DenyMessage message={messages.needLogin} />;
}

export { AdminOnly, UserOnly };
