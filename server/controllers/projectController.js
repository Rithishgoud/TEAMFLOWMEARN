const Project = require("../models/Project");

const createProject = async (req, res) => {
  try {
    const { title, description, members } = req.body;

    const project = await Project.create({
      title,
      description,
      createdBy: req.user.id,
      members,
    });

    res.status(201).json({
      message: "Project created successfully",
      project,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      createdBy: req.user.id,
    })
      .populate("createdBy", "name email role")
      .populate("members", "name email role");

    res.status(200).json({
      message: "Projects fetched successfully",
      count: projects.length,
      projects,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json({
      message: "Project fetched successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateProject = async (req, res) => {
  try {
    const { title, description, members } = req.body;

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    project.title = title || project.title;
    project.description = description || project.description;
    project.members = members || project.members;

    const updatedProject = await project.save();

    res.status(200).json({
      message: "Project updated successfully",
      project: updatedProject,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteProject = async (req, res) => {
  try {
    // Find the project
    const project = await Project.findById(req.params.id);

    // Check if project exists
    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    // Delete the project
    await project.deleteOne();

    res.status(200).json({
      message: "Project deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createProject,
  getProjects,
   updateProject,
   deleteProject,
     getProjectById,
};