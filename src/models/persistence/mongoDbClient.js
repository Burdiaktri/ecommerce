const config = require("../../config/mongoDb");
const mongoose = require("mongoose");
const Response = require("../server/response");
const dbProducto = require("../schemas/productos");
const dbCarrito = require("../schemas/carrito");

function myMongoClient(url, options) {
  // super();
  this.connection = mongoose;
}
this.initializateSchema = async () => {
  try {
    let data = await mongoose.connect(url, options);
    return "Schema inicializado";
  } catch (err) {
    throw new Response(data, "Error conectándose", 500);
  }
};
this.create = async (collection, items) => {
  let Collection = collection === "productos" ? dbProducto : dbCarrito;
  if (collection === "productos") {
    const { name } = items;
    let checkExists = await Collection.exists({ name });
    if (checkExists) return "El producto ya existe";
  }
  const created = new Collection(items);
  await created.save();
  return created;
};
this.findAll = async (collection) => {
  let Collection = collection === "productos" ? dbProducto : dbCarrito;
  return Collection.find();
};
this.updateById = async (collection, id, items) => {
  let Collection = collection === "productos" ? dbProducto : dbCarrito;
  if (validateId(id)) {
    let updated = await Collection.findByIdAndUpdate({ _id: id }, items);

    if (updated) return await this.findById(collection, id);
    return false;
  } else {
    return "No valid ID.";
  }
};

this.remove = async (collection, id) => {
  let Collection = collection === "productos" ? dbProducto : dbCarrito;

  if (validateId(id)) {
    let removed = await Collection.findByIdAndDelete(id);
    if (removed) return 1;
    return false;
  } else {
    return "No valid ID.";
  }
};

module.exports = myMongoClient;
