import React, { FC } from 'react';
import styles from './styles.module.scss';

interface IProps {
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  text: string;
  onClick?: () => void;
  colorSecondary?: boolean;
}

const MyButton: FC<IProps> = ({ text, disabled, colorSecondary, ...otherProps }) => {
  const { btn: btnStyle, btn_disabled: disabledStyle, btn_secondary: secondaryStyle } = styles;
  const classes = [btnStyle];

  if (disabled) {
    classes.push(disabledStyle);
  } else if (colorSecondary) {
    classes.push(secondaryStyle);
  }

  return (
    <button disabled={disabled} {...otherProps} className={classes.join(' ')}>
      {text}
    </button>
  );
};

export default MyButton;
