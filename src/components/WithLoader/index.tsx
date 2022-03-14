import React from 'react';
import Loader from '../Loader';
import styles from './styles.module.scss';

export interface IWithLoaderProps {
  isLoading: boolean;
}

const WithLoader: React.FC<IWithLoaderProps> = ({ isLoading, children }) => {
  const { container: containertStyle, loaderContainer: loaderContainerStyle } = styles;

  return (
    <div className={containertStyle}>
      {isLoading ? (
        <div className={loaderContainerStyle}>
          <Loader />
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default WithLoader;
