const express = require('express');

const db = require('../data/helpers/projectModel');

const router = express.Router();

// Get all projects

router.get("/", async (req, res) => {
    try {
      const allProjects = await db.get(res.query);
      if (allProjects) {
        res.json(allProjects);
      } else {
          res.status(400).json({message: "No projects found."})
      }
    } catch (err) {
      res.status(500).json({ message: "internal server errors" });
    }
  });


module.exports = router;