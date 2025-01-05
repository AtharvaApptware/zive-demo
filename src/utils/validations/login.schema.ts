import * as Yup from 'yup';
// ,-()/'"+:;<=>[]_#`{}~
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/;

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('invalid email address')
    .required('required field is empty')
    .trim(),
  password: Yup.string().required('Password is required'),
  // .matches(
  //   passwordRegex,
  //   'Your password must be more than 8 characters and have at least one 0-9 digit, one A-Z uppercase character, one a-z lowercase character, one special character.',
  // ),
});

export const registerSchema = Yup.object({
  email: Yup.string()
    .email('invalid email address')
    .required('required field is empty')
    .trim(),
  password: Yup.string()
    .required('Password is required')
    .matches(
      passwordRegex,
      'Your password must be more than 8 characters and have at least one 0-9 digit, one A-Z uppercase character, one a-z lowercase character, one special character.',
    ),

  confirmPassword: Yup.string()
    .required('Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  // .matches(
  //   passwordRegex,
  //   'Your password must be more than 8 characters and have at least one 0-9 digit, one A-Z uppercase character, one a-z lowercase character, one special character.',
  // ),
});
