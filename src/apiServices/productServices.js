const db = require('../../index')

const getProduct = async () => {
  let response = await dbProducto.find({});
  return response;
};

const createProduct = async (data) => {
  const { id, nombre, descripcion, codigo, url, precio, stock } = data;
  const producto = await db.create({
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
  const producto = await db.findById(id);
  const updatedProduct = await db.updateOne(data);
  return updatedProduct;
};

const deleteProduct = async (id) => {
  const producto = await db.findOneAndDelete({ id });
  return producto;
};

module.exports = { getProduct, createProduct, updateProduct, deleteProduct };
