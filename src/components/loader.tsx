'use client';
import { Bars } from 'react-loader-spinner';
import { palette } from '@/styles';
import styles from '@/styles/home.module.css';

const size = 80;

export default function Loader() {
  return <Bars height={size} width={size} color={palette.dark} ariaLabel="読込中" wrapperClass={styles.main} />;
}
