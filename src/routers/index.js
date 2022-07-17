import express from "express";
import livros from "./livrosRouters.js";

const routers = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de node"});
    })

    app.use(
        express.json(),
        livros
    )
}

export default routers;