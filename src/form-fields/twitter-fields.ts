import TextInput from '../components/form/text-input';

interface Rules {
  minLength: {
    value: number;
    message: string;
  };
  maxLength: {
    value: number;
    message: string;
  };
}

interface FormFields {
  InputComponent: React.ElementType;
  name: string;
  label: string;
  rules: Rules;
  helperText?: string;
  required: boolean;
}

export interface FormFieldsProps {
  fields: FormFields[];
}

export default [
  {
    name: 'twitterMessage',
    label: 'Twitter Message',
    type: 'text',
    required: true,
    rules: {
      minLength: {
        value: 1,
        message: 'Must be at least 1 character long!',
      },
      maxLength: {
        value: 280,
        message: 'Max number of characters in a tweet is 280!',
      },
    },
    InputComponent: TextInput,
  },
];
