const Response = require("../models/server/response.js");
const logger = require("../services/log4js/logs");
const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../apiServices/productServices");

const listarProductos = async (req, res, next) => {
  try {
    const data = await getProduct();
    data
      ? res.send(new Response(data))
      : res.status(404).send(new Response(data, "producto no encontrado", 404));
  } catch (error) {
    next(error);
    logger.error("Error en listar productos");
  }
};
const agregarProductos = async (req, res, next) => {
  const data = req.body;
  try {
    res.send(new Response(await createProduct(data)));
  } catch (error) {
    next(error);
    logger.error("Error en agregar productos");
  }
};

const actualizarProductos = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  try {
    updateProduct(id, data)
      ? res.send(new Response(await updateProduct(id, data)))
      : res.status(404).send(new Response("Producto no encontrado", 404));
  } catch (error) {
    logger.error("Error en actualizar productos");
    next(error);
  }
};

const borrarProductos = async (req, res, next) => {
  const { id } = req.params
  try {
    deleteProduct(id)
      ? res.send(new Response(await deleteProduct(id)))
      : res.status(404).send(new Response("producto no encontrado", 404))
  } catch (error) {
    logger.error("Error en borrar productos");
    next(error);
  }
};

module.exports = {
  listarProductos,
  agregarProductos,
  actualizarProductos,
  borrarProductos,
};
