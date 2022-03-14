import React, { FC } from 'react';
import styles from './styles.module.scss';

const Loader: FC = () => {
  const { loader: loaderStyle } = styles;

  return <div role="progressbar" className={loaderStyle}></div>;
};

export default Loader;
