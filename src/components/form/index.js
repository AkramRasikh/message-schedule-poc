import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';

const Form = ({ fields, setForm, defaultValues }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (fieldData) => {
    if (defaultValues) {
      setForm({ ...defaultValues, ...fieldData });
    } else {
      const m = new Date();
      setForm({
        id: nanoid(),
        ...fieldData,
        postTime: `${m.getUTCFullYear()}/${
          m.getUTCMonth() + 1
        }/${m.getUTCDate()} ${m.getUTCHours()}:${m.getUTCMinutes()}:${m.getUTCSeconds()}`,
      });
    }
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
        }) => (
          <Grid key={name}>
            <InputComponent
              name={name}
              label={label}
              register={register(name, {
                required,
                pattern,
                ...rules,
              })}
              defaultValue={defaultValues && defaultValues[name]}
              {...fieldProps}
            />
            {errors[name] && <span>{errors[name].message}</span>}
          </Grid>
        ),
      )}
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default Form;
