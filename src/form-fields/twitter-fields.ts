import TextInput from '../components/form/text-input';
// import { timeIsInFuture } from './validation-helpers';

interface LengthRules {
  value: number;
  message: string;
}

interface Rules {
  minLength?: LengthRules;
  maxLength?: LengthRules;
  validate?: { (flag: any): boolean };
}

interface Pattern {
  value: any;
  message: string;
}

export interface FormFields {
  InputComponent: React.ElementType;
  name: string;
  label: string;
  rules?: Rules;
  helperText?: string;
  required: boolean;
  pattern?: Pattern;
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
  // {
  //   name: 'timeOfTweet',
  //   label: 'Time tweet is scheduled for',
  //   type: 'text',
  //   required: true,
  //   // rules: {
  //   //   validate: timeIsInFuture,
  //   // },
  //   pattern: {
  //     value: /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/,
  //     message: 'legit date please!',
  //   },
  //   InputComponent: TextInput,
  // },
];
