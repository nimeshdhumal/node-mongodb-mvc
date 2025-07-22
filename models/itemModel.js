const mongoose = require("mongoose");
const schema = require("../utils/schemas");//Getting all schemas;;;
const schemaSave = mongoose.model('items', schema);

const saveData = async () => {
    await saveData.create({ name: "Iphone", description: "it is a very expensive and apple company brand.", price: 120000 });
}