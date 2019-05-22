const express = require('express');
const db = require('../data/helpers/actionModel');
const dbProjects = require('../data/helpers/projectModel')
const router = express.Router();

// Get all actions

router.get('/', async (req, res) => {
    try{
        const allActions = await db.get(res.query);
        if (allActions){
            res.json(allActions)
        } else {
            res.status(400).json({message: "No actions found."})
        }
    } catch(err){
        res.status(500).json(err.message)
    }
})

// Get actions by id

router.get('/:id', validateID, async (req, res) => {
    try {
        const action = await db.get(req.params.id)
        res.json(action)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

// Delete an action

router.delete('/:id', validateID, async (req, res) =>{
    try{
        const deletedAction = await db.remove(req.params.id)
        res.json(deletedAction)
    } catch(err){
        res.status(500).json(err.message)
    }
})

// Update an action

router.put('/:id', validateID, async (req, res) => {
    try {
        const updatedAction = await db.update(req.params.id, req.body)
        res.json(updatedAction)
    } catch(err){
        res.status(500).json(err.message)
    }
})

// Add an action

router.post('/', async (req, res) => {
  try{
    const validateProject = await dbProjects.get(req.body.project_id);

    if(validateProject){
        const newAction = await db.insert(req.body)
        res.json(newAction)
    } else {
        res.status(404).json({message: "There is no project with that id"})
    }
  } catch(err){
      res.status(500).json(err.message)
  }
})

// router.post('/', async (req, res) => {
//     try {
//         const newAction = db.insert(req.body)
//         if (!req.body.project_id) {
//             res.status(500).json({message: "You must include a project id number."})
//         } else if (req.body) {
//             res.json(newAction)
//         } else {
//             res.status(500).json({error: "Make sure you've included all necessary information."})
//         } 
//     } catch(err){
//         res.status(500).json(err.message)
//     }
// })

// Middleware

async function validateID(req, res, next) {
    try {
        const action = await db.get(req.params.id);
        if (action){
            req.action = action;
            next()
        } else {
            next({message: "Action not found, invalid id."})
        }
    } catch(err){
        res.status(404).json({message: "No action found at that id."})
    }
}

module.exports = router;