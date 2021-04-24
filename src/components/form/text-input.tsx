import React from 'react';
import { FormHelperText, Grid, Input, InputLabel } from '@material-ui/core';

interface TextInputProps {
  type: string;
  label: string;
  defaultValue: string;
  name: string;
  register: any;
  helperText: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  label,
  defaultValue,
  name,
  register,
  helperText,
}) => (
  <>
    <Grid container>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </Grid>
    <Input
      id={name}
      type={type}
      data-testid={name}
      defaultValue={defaultValue}
      {...register}
    />
  </>
);

export default TextInput;
