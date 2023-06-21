'use client';

import { Bars } from 'react-loader-spinner';
import { color } from '@/styles/colors';
import styles from '@/styles/home.module.css';

const size = 80;

export function Loader() {
  return <Bars height={size} width={size} color={color.dark} ariaLabel="読込中" wrapperClass={styles.main} />;
}
