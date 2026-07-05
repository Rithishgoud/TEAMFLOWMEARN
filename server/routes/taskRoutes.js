// const express = require("express");
// const router = express.Router();

// const protect = require("../middleware/authMiddleware");

// const { createTask } = require("../controllers/taskController");

// router.post("/", protect, createTask);

// module.exports = router;





// const express = require("express");
// const router = express.Router();

// const protect = require("../middleware/authMiddleware");

// const {
//   createTask,
//   getTasks,
// } = require("../controllers/taskController");

// router.post("/", protect, createTask);
// router.get("/", protect, getTasks);

// module.exports = router;



// const express = require("express");
// const router = express.Router();

// const protect = require("../middleware/authMiddleware");

// const {
//   createTask,
//   getTasks,
//   updateTask,
// } = require("../controllers/taskController");

// router.post("/", protect, createTask);
// router.get("/", protect, getTasks);
// router.put("/:id", protect, updateTask);

// module.exports = router;



const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTasksByProject,
} = require("../controllers/taskController");

router.post("/", protect, createTask);

router.get("/", protect, getTasks);

router.put("/:id", protect, updateTask);

router.delete("/:id", protect, deleteTask);
router.get("/project/:projectId", protect, getTasksByProject);

module.exports = router;