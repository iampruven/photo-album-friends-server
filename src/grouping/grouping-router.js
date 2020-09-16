const express = require("express");
const GroupingService = require("./grouping-service");
const jsonBodyParser = express.json();
const GroupingRouter = express.Router();

const serializeGrouping = (grouping)=>{
    return {id:grouping.id, name:grouping.name}
}
GroupingRouter
    .route('/')
    .get((req,res,next)=>{
        GroupingService.getGroupName(req.app.get('db'))
            .then((newName)=>{
                res.json(newName.map(serializeGrouping))
            })
            .catch(next);
    })
    .post(jsonBodyParser, (req, res, next)=>{
        const { name } = req.body;
        GroupingService.insertNewGroupName(req.app.get('db'), name)
            .then((post)=>{
                res.status(201).json(post);
            })
            .catch(next);
        
    })


module.exports = GroupingRouter;