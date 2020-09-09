const express = require("express");
const postService = require("./post-service");
const jsonBodyParser = express.json();
const postRouter = express.Router()

postRouter
    .route('/')
    .get((req,res,next)=>{
        postService.getData(req.app.get("db"), 1)
        .then((newItem) => {
            console.log(newItem)
          res.json(newItem);
        })
        .catch(next);
    })

module.exports = postRouter;