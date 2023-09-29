import { body } from 'express-validator';
import { UserModel } from '../model/user.model.js';

const verifyExistingAuthor = async (id) => {
    const author = await UserModel.findById(id);
    console.log(author);
    if (!author) {
        throw new Error('El autor no existe. Cree uno antes de publicar');
    }
    return true;
}

export const createPublicationSchema = [
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
        .custom(verifyExistingAuthor)
];

export const updatePublicationSchema = [
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
        .custom(verifyExistingAuthor)
]