// const express = require("express");
// const router = express.Router();

// const protect = require("../middleware/authMiddleware");
// const { createProject } = require("../controllers/projectController");

// router.post("/", protect, createProject);

// module.exports = router;


// const express = require("express");
// const router = express.Router();

// const protect = require("../middleware/authMiddleware");

// const {
//   createProject,
//   getProjects,
// } = require("../controllers/projectController");

// router.post("/", protect, createProject);

// router.get("/", protect, getProjects);

// module.exports = router;
const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
    getProjectById,
} = require("../controllers/projectController");

router.post("/", protect, createProject);

router.get("/", protect, getProjects);

router.put("/:id", protect, updateProject);
router.delete("/:id", protect, deleteProject);
router.get("/:id", protect, getProjectById);
module.exports = router;