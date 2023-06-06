'use client';
import { Bars } from 'react-loader-spinner';
import { colors } from '@/styles/colors';
import styles from '@/styles/home.module.css';

const size = 80;

export default function Loader() {
  return <Bars height={size} width={size} color={colors.dark} ariaLabel="読込中" wrapperClass={styles.main} />;
}
