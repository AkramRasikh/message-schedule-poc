import React from 'react';
import { FormControl, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { FormFieldsProps } from '../../form-fields/twitter-fields';

const Form: React.FC<FormFieldsProps> = ({ fields }) => {
  const { register, handleSubmit } = useForm({ mode: 'onChange' });

  const onSubmit = (fieldData: any) => {
    console.log('fieldData: ', fieldData);
  };

  return (
    <FormControl onSubmit={handleSubmit(onSubmit)}>
      {fields.map(
        ({ InputComponent, name, label, required, rules, ...fieldProps }) => (
          <Grid key={name}>
            <InputComponent
              name={name}
              label={label}
              {...fieldProps}
              register={register(name, {
                required,
                ...rules,
              })}
            />
          </Grid>
        ),
      )}
      <button>Submit</button>
    </FormControl>
  );
};

export default Form;
