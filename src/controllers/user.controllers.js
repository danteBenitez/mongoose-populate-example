import { PublicationModel } from "../model/publication.model.js";
import { UserModel } from "../model/user.model.js";

export async function createUser(req, res) {
    try {
        const newUser = await UserModel.create(req.body);
        res.status(201).json({
            user: newUser
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Error interno del servidor'
        });
    }
}

export async function getAllUsers(_req, res) {
    try {
        const users = await UserModel.find().populate('publications', {
            _v: 0,
            authorId: 0
        });

        if (!users || users.length === 0) {
            return res.status(404).json({
                message: 'Usuarios no encontrados'
            });
        }
        res.status(200).json({
            users
        })

    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Error interno del servidor'
        });
    }
}

export async function getUser(req, res) {
    const { userId } = req.params;
    try {
        const user = await UserModel.findById(userId).populate('publications', {
            _v: 0,
            authorId: 0
        });

        if (!user) {
            return res.status(404).json({
                message: 'Usuario no encontrado'
            });
        }

        res.status(200).json({
            user
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Error interno del servidor'
        });
    }

}

export async function updateUser(req, res) {
    const { userId } = req.params;
    try {
        const found = await UserModel.findById(userId).populate('publications', {
            _v: 0,
            authorId: 0
        });

        if (!found) {
            return res.status(404).json({
                message: 'Usuario no encontrado'
            });
        }
        await found.updateOne(req.body);
        res.status(200).json({
            message: 'Usuario actualizado correctamente'
        });

    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Error interno del servidor'
        });
    }

}

export async function deleteUser(req, res) {
    const { userId } = req.params;
    try {
        const found = await UserModel.findById(userId).populate('authorId', {
            _v: 0,
            authorId: 0
        });

        if (!found) {
            return res.status(404).json({
                message: 'Usuario no encontrado'
            });
        }
        await found.deleteOne();
        res.status(200).json({
            message: 'Usuario borrado correctamente'
        });

    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Error interno del servidor'
        });
    }
}

