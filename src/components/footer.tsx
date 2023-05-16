import { env } from '@/env.mjs';
import classNames from '@/lib/class-names';
import styles from '@/styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={classNames(styles.footer, 'flex justify-center bg-neutral-600 py-1 text-sm text-neutral-300')}>
      <span className="px-0.5">©</span>
      <span>2023 {env.NEXT_PUBLIC_APP_NAME ?? ''}, Inc.</span>
    </footer>
  );
}
