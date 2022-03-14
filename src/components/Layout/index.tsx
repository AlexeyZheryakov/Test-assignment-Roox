import React, { FC } from 'react';
import styles from './styles.module.scss';
import MyButton from '../Button';
import { useAppDispatch } from '../../hooks/redux';
import { sortUsers } from '../../store/Users/slice';
import { Filters } from '../../store/Users/types';

const Layout: FC = ({ children }) => {
  const {
    container: containerStyle,
    content: contentStyle,
    sorting: sortingStyle,
    title: titleStyle,
    btn_container: btnContainerStyle,
  } = styles;

  const dispatch = useAppDispatch();

  const handleButtonSortCity = () => {
    dispatch(sortUsers(Filters.city));
  };

  const handleButtonSortCompany = () => {
    dispatch(sortUsers(Filters.company));
  };

  return (
    <div className={containerStyle}>
      <div className={sortingStyle}>
        <div className={titleStyle}>Сортировка</div>
        <div className={btnContainerStyle}>
          <MyButton onClick={handleButtonSortCity} text="по городу" />
        </div>
        <div>
          <MyButton onClick={handleButtonSortCompany} text="по компании" />
        </div>
      </div>
      <div className={contentStyle}>{children}</div>
    </div>
  );
};

export default Layout;
