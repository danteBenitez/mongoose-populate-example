import { PublicationModel } from "../model/publication.model.js";
import { UserModel } from "../model/user.model.js";

export async function createPublication(req, res) {
  const { authorId } = req.body;
  try {
    const authorFound = await UserModel.findById(authorId);

    const newPublication = await PublicationModel.create(req.body)
    await newPublication.populate(
      "authorId",
      {
        _v: 0,
        publications: 0,
      }
    );
    authorFound.publications.push(newPublication._id);

    await authorFound.save();

    res.status(201).json({
      publication: newPublication,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
}

export async function getAllPublications(_req, res) {
  try {
    const publications = await PublicationModel.find().populate("authorId", {
      _v: 0,
      publications: 0,
    });

    if (!publications || publications.length === 0) {
      return res.status(404).json({
        message: "Publicaciones no encontradas",
      });
    }
    res.status(200).json({
      publications,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
}

export async function getPublication(req, res) {
  const { publicationId } = req.params;
  try {
    const user = await PublicationModel.findById(publicationId).populate(
      "authorId",
      {
        _v: 0,
        publications: 0,
      }
    );

    if (!user) {
      return res.status(404).json({
        message: "Publicación no encontrada",
      });
    }

    res.status(200).json({
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
}

export async function updatePublication(req, res) {
  const { publicationId } = req.params;
  const { authorId } = req.body;
  try {
    const authorFound = await UserModel.findById(authorId);

    if (!authorFound) {
      return res.status(404).json({
        message:
          "Autor no encontrado. Cree uno antes de actualizar una publicación a su nombre.",
      });
    }

    const found = await PublicationModel.findById(publicationId).populate(
      "authorId",
      {
        _v: 0,
        publications: 0,
      }
    );

    if (!found) {
      return res.status(404).json({
        message: "Publicación no encontrada",
      });
    }

    await found.updateOne(req.body);

    res.status(200).json({
      message: "Publicación actualizada correctamente",
      publication: found,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
}

export async function deletePublication(req, res) {
  const { publicationId } = req.params;
  try {
    const found = await PublicationModel.findById(publicationId).populate(
      "authorId",
      {
        _v: 0,
        publications: 0,
      }
    );

    if (!found) {
      return res.status(404).json({
        message: "Publicación no encontrada",
      });
    }
    await found.deleteOne();
    res.status(200).json({
      message: "Publicación borrada correctamente",
      publication: found,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
}
