import express from "express";
import db from "../mockdb/"  //within file index.js

let router = express.Router();

router.get("/:id?", async (req, res, next) => {
    try {
      let { id } = req.params;
      let data;
      if (id) 
         {data = await db.getOne(id)}
      else 
         {data = await db.getAll()};

      res.json(data);

    } catch (error) {
       next(error);
    }
 }
 )

router.post("/", async (req, res, next) => {
    try {
      console.log("I am here");
      let newUser = req.body;
      let data = await db.add(newUser);
      res.json(data);
    } catch (error) {
       next(error);
    }
 }
 )

router.put("/:id", async (req, res, next) => {
    try {
      let { id } = req.params;
      let updatedUser = req.body;
      let data = await db.update(id, updatedUser); 
      res.json(data);
    } catch (error) {
       next(error);
    }
 }
)

router.delete("/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let data = await db.remove(id); 
        res.json(data);       
    } catch (error) {
       next(error);
    }
 }
 )

 export default router;