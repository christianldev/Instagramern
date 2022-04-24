import * as Yup from 'yup';

export const validationSchemaRegister = Yup.object({
  name: Yup.string().required('Tu nombre es requerido'),
  username: Yup.string().required('Tu nombre de usuario es requerido'),
  email: Yup.string()
    .required('Tu correo es requerido')
    .email('Ingresa un correo valido'),

  password: Yup.string()
    .required('La contraseña es requerida')
    .matches(
      /(?=.*?[A-Z])/,
      'La contraseña debe tener al menos una letra mayuscula',
    )
    .matches(
      /(?=.*?[a-z])/,
      'La contraseña debe tener al menos una letra minuscula',
    )
    .matches(/(?=.*?[0-9])/, 'La contraseña debe tener al menos un numero')

    .min(8, 'La contraseña debe tener minimo 8 caracteres'),
  repeatPassword: Yup.string()
    .required('La contraseña es requerida')
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
});

export const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .required('Tu correo es requerido')
    .email('Ingresa un correo valido'),
  password: Yup.string().required('La contraseña es requerida'),
});
