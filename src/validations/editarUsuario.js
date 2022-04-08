import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import roles from '../helpers/roles'
const schema = yup.object().shape({
    name: yup
    .string('debe ingresar un nombre')
    .required("Campo Nombre Requerido"),
    email:yup
    .string()
    .required("Campo Email Requerido")
    .email("debe ingresar un correo electronico valido"),
    edad:yup
    .string('debe ingresar una edad')
    .required("Campo edad Requerido"),
    role:yup
    .string()
    .oneOf(Object.keys(roles))
})

export default yupResolver(schema)