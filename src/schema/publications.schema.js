import { body } from 'express-validator';

export const createUserSchema = [
    body('title')
        .exists().withMessage('Una publicación debe tener un título')
        .isString().withMessage('El título debe ser un string')
        .notEmpty().withMessage('El título no puede estar vacío'),
    body('content')
        .exists().withMessage('Una publicación debe tener un contenido')
        .isString().withMessage('El contenido debe ser un string')
        .notEmpty().withMessage('El contenido no puede estar vacío'),
    body('authorId')
        .exists().withMessage('Debe proveer el ID del autor de la publicación')
];

export const updateUserSchema = [
    body('title')
        .exists().withMessage('Una publicación debe tener un título')
        .isString().withMessage('El título debe ser un string')
        .notEmpty().withMessage('El título no puede estar vacío'),
    body('content')
        .exists().withMessage('Una publicación debe tener un contenido')
        .isString().withMessage('El contenido debe ser un string')
        .notEmpty().withMessage('El contenido de usuario no puede estar vacío'),
    body('authorId')
        .exists().withMessage('Debe proveer el ID del autor de la publicación')
]