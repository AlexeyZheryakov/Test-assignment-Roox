import React, { FC } from 'react';
import styles from './styles.module.scss';

interface IProps {
  label: string;
  name: string;
  value: string;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
}

const Textarea: FC<IProps> = ({ label, disabled, ...otherProps }) => {
  const { container: containerStyle, disabled: disabledStyle, textarea: textareaStyle } = styles;
  const classes = [textareaStyle];
  if (disabled) {
    classes.push(disabledStyle);
  }

  return (
    <div className={containerStyle}>
      <label>{label}</label>
      <textarea className={classes.join(' ')} disabled={disabled} {...otherProps} />
    </div>
  );
};

export default Textarea;
