const express = require("express");

const db = require("../data/helpers/projectModel");

const router = express.Router();

// Get all projects

router.get("/", async (req, res) => {
  try {
    const allProjects = await db.get(res.query);
    if (allProjects) {
      res.json(allProjects);
    } else {
      res.status(400).json({ message: "No projects found." });
    }
  } catch (err) {
    res.status(500).json({ message: "internal server errors" });
  }
});

router.get('/:id', validateID, async (req, res) => {
   const project = await db.get(req.params.id);
   res.json(project)
})

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
