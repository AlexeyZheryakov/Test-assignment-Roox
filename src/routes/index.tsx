import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Details from '../pages/Details';
import Main from '../pages/Main';
import { Urls } from './config';

const СonfiguredRoutes: FC = () => {
  return (
    <Routes>
      <Route path={Urls.main} element={<Main />} />
      <Route path={`${Urls.details}/:id`} element={<Details />} />
    </Routes>
  );
};

export default СonfiguredRoutes;
