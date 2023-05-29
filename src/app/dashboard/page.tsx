import Content from '@/app/dashboard/content';
import styles from '@/styles/common.module.css';

async function Page(): Promise<JSX.Element> {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Content />
      </main>
    </div>
  );
}

export default Page;
