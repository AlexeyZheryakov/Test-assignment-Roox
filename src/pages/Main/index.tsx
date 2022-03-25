import React, { useEffect } from 'react';
import UserCard from '../../components/UserCard';
import { getOptions } from '../../components/UserCard/utils';
import WithLoader from '../../components/WithLoader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUsers } from '../../store/actions/user';
import styles from './styles.module.scss';

const Main = () => {
  const { container: containerStyle, title: titleStyle, endText: endTextStyle, error: errorStyle } = styles;
  const dispatch = useAppDispatch();
  const {
    usersStore: { users, isLoading, error },
  } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={containerStyle}>
      {error && <div className={errorStyle}>Error: {error}</div>}
      {!!users.length && (
        <WithLoader isLoading={isLoading}>
          <div className={titleStyle}>Список пользователей</div>
          <ul>
            {users.map(({ name, id, address: { city }, company: { name: company } }) => (
              <UserCard key={id} id={id} options={getOptions({ name, city, company })} />
            ))}
          </ul>
          <div className={endTextStyle}>Найдено {users.length} пользователей</div>
        </WithLoader>
      )}
    </div>
  );
};

export default Main;
