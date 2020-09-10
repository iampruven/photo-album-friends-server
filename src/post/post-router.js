const express = require("express");
const postService = require("./post-service");
const jsonBodyParser = express.json();
const postRouter = express.Router()

const serializePost = (post) => {
    return {
        id: post.id,  
        group_id: post.group_id,
        date_posted: post.date_posted,
        description: post.description,
        img_url: post.img_url,
        user: `${process.env.HOST}/api/user/${post.user_id}`
    }
}

postRouter
    .route('/')
    .get((req,res,next)=>{
        postService.getPost(req.app.get("db"), 1)
        .then((newItems) => {
          res.json(newItems.map(serializePost));
        })
        .catch(next);
    })
    .post(jsonBodyParser, (req,res,next)=>{
        const { img_url, description, group_id } = req.body;
        console.log('this is body',req.body);
        const user_id = req.user.id;
        postService.getPost(req.app.get("db"), img_url, description, group_id, user_id)
    })



module.exports = postRouter;