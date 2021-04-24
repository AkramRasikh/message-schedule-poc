import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { FormFieldsProps, FormFields } from '../../form-fields/twitter-fields';

interface Props {
  fields: FormFields[];
  setForm: (fieldData: any) => void;
}

const Form: React.FC<Props> = ({ fields, setForm }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (fieldData: any) => {
    const m = new Date();
    setForm({
      ...fieldData,
      postTime:
        m.getUTCFullYear() +
        '/' +
        (m.getUTCMonth() + 1) +
        '/' +
        m.getUTCDate() +
        ' ' +
        m.getUTCHours() +
        ':' +
        m.getUTCMinutes() +
        ':' +
        m.getUTCSeconds(),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map(
        ({
          InputComponent,
          name,
          label,
          required,
          pattern,
          rules,
          ...fieldProps
        }) => {
          return (
            <Grid key={name}>
              <InputComponent
                name={name}
                label={label}
                register={register(name, {
                  required,
                  pattern,
                  ...rules,
                })}
                // defaultValue={22}
                {...fieldProps}
              />
              {errors[name] && <span>{errors[name].message}</span>}
            </Grid>
          );
        },
      )}
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default Form;
