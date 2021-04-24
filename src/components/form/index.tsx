import React from 'react';
import { Button, FormControl, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { FormFieldsProps } from '../../form-fields/twitter-fields';

const Form: React.FC<FormFieldsProps> = ({ fields }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (fieldData: any) => {
    console.log('fieldData: ', fieldData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        {fields.map(
          ({ InputComponent, name, label, required, rules, ...fieldProps }) => {
            return (
              <Grid key={name}>
                <InputComponent
                  name={name}
                  label={label}
                  register={register(name, {
                    required,
                    ...rules,
                  })}
                  {...fieldProps}
                />
                {errors[name] && <span>{errors[name].message}</span>}
              </Grid>
            );
          },
        )}
        <Button type='submit'>Submit</Button>
      </FormControl>
    </form>
  );
};

export default Form;
