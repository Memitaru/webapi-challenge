const express = require('express');
const db = require('../data/helpers/actionModel');
const router = express.Router();





// Middleware

async function validateID(req, res, next) {
    if (!req.params.id){
        res.status(400).json({message: "Missing ID"})
    } else {
        const idValidated = await db.get(req.params.id);
        if(!idValidated){
            res.status(404).json({message: "ID is invalid"})
            return; // Gets rid of unhandled promise rejection warning
        }
    }
    next();
}

module.exports = router;