const { dbProducto } = require("../models/schemas/productos.js");

const getProduct = async () => {
  let response = await dbProducto.find({});
  return response;
};

const createProduct = async (data) => {
  const { id, nombre, descripcion, codigo, url, precio, stock } = data;
  const producto = await dbProducto.create({
    id,
    nombre,
    descripcion,
    codigo,
    url,
    precio,
    stock,
  });
  return producto;
};

const updateProduct = async (id, data) => {
  const { nombre, descripcion, codigo, url, precio, stock } = data;
  const producto = await dbProducto.findById(id);
  const updatedProduct = await dbProducto.updateOne(data);
  return updatedProduct;
};

const deleteProduct = async (id) => {
  const producto = await dbProducto.findOneAndDelete({ id });
  return producto;
};

module.exports = { getProduct, createProduct, updateProduct, deleteProduct };
