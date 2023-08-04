export default function validate(userData) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const errors = {}
    if (!regexEmail.test(userData.email)) errors.email = 'El nombre de usuario tiene que ser un email'
    if (!userData.email) errors.email = 'El nombre de usuario no puede estar vacío'
    if (userData.email.length > 35) errors.email = 'El nombre de usuario no puede tener más de 35 caracteres'
    if (!/\d/.test(userData.password)) errors.password = 'La contraseña tiene que tener al menos un número'
    if (userData.password.length < 6 || userData.password.length > 10) errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres'
    return errors
}