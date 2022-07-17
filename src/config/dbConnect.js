import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mathewsmw:2490195@cluster0.xdxew.mongodb.net/minha-colecao-node");

let db = mongoose.connection;

export default db;