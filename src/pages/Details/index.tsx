import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyButton from '../../components/Button';
import Form from '../../components/Form';
import { setInitialValues } from '../../components/Form/config';
import WithLoader from '../../components/WithLoader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUserById } from '../../store/actions/user';

import styles from './styles.module.scss';

const Details = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { container: containerStyle, error: errorStyle, title: titleStyle } = styles;
  const {
    usersStore: { user: currendUser, isLoading, error },
  } = useAppSelector((store) => store);
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const handleButtonEdit = () => {
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    if (id) {
      dispatch(getUserById(id));
    }
  }, [dispatch, id]);

  return (
    <div className={containerStyle}>
      {error && <div className={errorStyle}>Error: {error}</div>}
      {!!currendUser && (
        <WithLoader isLoading={isLoading}>
          <header>
            <div className={titleStyle}>Профиль пользоваетля</div>
            <MyButton onClick={handleButtonEdit} text="Редактироввать" />
          </header>
          <Form isEdit={isEdit} initialValues={setInitialValues(currendUser)} />
        </WithLoader>
      )}
    </div>
  );
};

export default Details;
