import React, { FC } from 'react';
import styles from './styles.module.scss';

interface IProps {
  title: string;
  text: string;
}

const CurdItem: FC<IProps> = ({ title, text }) => {
  const { container: containerStyle, title: titleStyle, text: textStyle } = styles;

  return (
    <div className={containerStyle}>
      <span className={titleStyle}>{title}:</span>
      <span className={textStyle}>{text}</span>
    </div>
  );
};

export default CurdItem;
