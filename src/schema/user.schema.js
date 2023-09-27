import { body } from 'express-validator';

export const createUserSchema = [
    body('username')
        .exists().withMessage('Un usuario debe tener un username')
        .isString().withMessage('El nombre debe ser un string')
        .notEmpty().withMessage('El nombre de usuario no puede estar vacío'),
    body('email')
        .exists().withMessage('Un usuario debe tener un email')
        .isString().withMessage('El email debe ser un string')
        .notEmpty().withMessage('El email de usuario no puede estar vacío')
        .isEmail().withMessage('Debe enviar una dirección de correo válida')
];

export const updateUserSchema = [
    body('username')
        .exists().withMessage('Un usuario debe tener un username')
        .isString().withMessage('El nombre debe ser un string')
        .notEmpty().withMessage('El nombre de usuario no puede estar vacío'),
    body('email')
        .exists().withMessage('Un usuario debe tener un email')
        .isString().withMessage('El email debe ser un string')
        .notEmpty().withMessage('El email de usuario no puede estar vacío')
        .isEmail().withMessage('Debe enviar una dirección de correo válida')
]