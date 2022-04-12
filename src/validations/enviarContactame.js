import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
const schema = yup.object().shape({
    correo: yup
    .string()
    .required("Campo Correo Requerido")
    .min(7,"El correo debe tener mas de 7 caracteres"),
    asunto:yup 
    .string()
    .required("Campo Asunto Requerido")
    .min(5,"El asunto debe tener mas de 5 caracteres"),
    mensaje:yup 
    .string()
    .required("Campo Asunto Requerido")
    .min(10,"El asunto debe tener mas de 10 caracteres"),
})

export default yupResolver(schema)