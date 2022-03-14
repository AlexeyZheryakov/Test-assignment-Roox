import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Urls } from '../../routes/config';
import CurdItem from '../CurdItem';
import styles from './styles.module.scss';
import { IOption } from './types';

interface IProps {
  id: number;
  options: IOption[];
}

const UserCard: FC<IProps> = ({ id, options }) => {
  const { container: containertStyle, link: linkStyle, textContainer: textContainerStyle } = styles;

  return (
    <li className={containertStyle}>
      <div className={textContainerStyle}>
        {options.map((option, i) => (
          <CurdItem key={i} {...option} />
        ))}
      </div>
      <Link className={linkStyle} to={`${Urls.details}/${id}`}>
        Подробнее
      </Link>
    </li>
  );
};

export default UserCard;
