import { useFormik } from 'formik';
import React, { FC } from 'react';
import MyButton from '../Button';
import Input from '../Input';
import Textarea from '../Textarea';
import validationSchema, { InputNames, TInputLabelNames, IValues } from './config';
import styles from './styles.module.scss';

interface IProps {
  initialValues: IValues;
  isEdit: boolean;
}

const Form: FC<IProps> = ({ initialValues, isEdit }) => {
  const inputLabelNames = Object.keys(InputNames) as [TInputLabelNames];
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(values));
    },
  });
  const { container: containerStyle, btnStyle: btnContainerStyle } = styles;

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={containerStyle}>
        {inputLabelNames.map((inputName, i) => (
          <Input
            key={i}
            error={!!formik.errors[inputName]}
            disabled={!isEdit}
            label={InputNames[inputName]}
            {...formik.getFieldProps(inputName)}
          />
        ))}
        <Textarea disabled={!isEdit} label={'Comment'} {...formik.getFieldProps('Comment')} />
      </div>
      <div className={btnContainerStyle}>
        <MyButton disabled={!isEdit} type="submit" colorSecondary text="Отправить" />
      </div>
    </form>
  );
};

export default Form;
