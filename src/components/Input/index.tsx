import React, { FC } from 'react';
import styles from './styles.module.scss';

interface IProps {
  label: string;
  name: string;
  value: string;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
  error: boolean;
}

const Input: FC<IProps> = ({ label, error, disabled, ...otherProps }) => {
  const { container: containerStyle, error: errorStyle, disabled: disabledStyle, input: inputStyle } = styles;
  const classes = [inputStyle];
  if (error) {
    classes.push(errorStyle);
  } else if (disabled) {
    classes.push(disabledStyle);
  }

  return (
    <div className={containerStyle}>
      <label>{label}</label>
      <input disabled={disabled} className={classes.join(' ')} type="text" {...otherProps} />
    </div>
  );
};

export default Input;
