const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      project,
      assignedTo,
      dueDate,
    } = req.body;

    const task = await Task.create({
      title,
      description,
      project,
      assignedTo,
      dueDate,
    });

    res.status(201).json({
      message: "Task created successfully",
      task,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteTask = async (req, res) => {
  try {
    // Find the task by ID
    const task = await Task.findById(req.params.id);

    // Check if task exists
    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    // Delete the task
    await Task.findByIdAndDelete(req.params.id);

    // Send success response
    res.status(200).json({
      message: "Task deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("project", "title")
      

    res.status(200).json({
      message: "Tasks fetched successfully",
      count: tasks.length,
      tasks,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    task.status = req.body.status || task.status;

    await task.save();

    res.status(200).json({
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


//const Task = require("../models/Task");
const Project = require("../models/Project");

const getTasksByProject = async (req, res) => {
  try {
    // Check if this project belongs to the logged-in user
    const project = await Project.findOne({
      _id: req.params.projectId,
      createdBy: req.user.id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    const tasks = await Task.find({
      project: req.params.projectId,
    });

    res.status(200).json({
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
   getTasksByProject,
};