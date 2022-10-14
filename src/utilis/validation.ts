import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    username : yup.string().required('Name is required').min(3, 'Name must be at least 3 characters').max(12, 'Name must be less than 12 characters'),
    email: yup.string().email().required(),
    password: yup.string().required().min(8, 'Password must be at least 8 characters').max(16, 'Password must be less than 16 characters'),
    confirmPassword: yup.string().required().min(6).oneOf([yup.ref('password')], 'Passwords must match') 
})