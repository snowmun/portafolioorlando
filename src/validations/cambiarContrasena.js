import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
const schema = yup.object().shape({
    password: yup
    .string()
    .required("Campo Contraseña Requerido")
    .min(5,"la contraseña debe tener almenos 5 caracteres"),
})

export default yupResolver(schema)