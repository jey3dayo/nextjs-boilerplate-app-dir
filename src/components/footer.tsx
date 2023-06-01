import { env } from '@/env.mjs';
import classNames from '@/lib/class-names';
import styles from '@/styles/footer.module.css';

export default function Footer() {
  return (
    <footer
      className={classNames(styles.footer, 'flex h-[4vh] items-center justify-center bg-dark text-sm text-primary-300')}
    >
      <span className="px-0.5">©</span>
      <span>2023 {env.NEXT_PUBLIC_APP_NAME ?? ''}, Inc.</span>
    </footer>
  );
}
