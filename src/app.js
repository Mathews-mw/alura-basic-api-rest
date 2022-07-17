import express from "express";
import db from "./config/dbConnect.js"
import routers from "./routers/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso');
})

const app = express();

app.use(express.json());

routers(app);

export default app