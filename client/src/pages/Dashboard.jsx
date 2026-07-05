// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// function Dashboard() {
//   const navigate = useNavigate();

//   const [projects, setProjects] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [editingProjectId, setEditingProjectId] = useState(null);


//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   // Fetch all projects
//   const fetchProjects = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await axios.get(
//         "http://localhost:5000/api/projects",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setProjects(res.data.projects);
//     } catch (error) {
//       console.log(error.response?.data || error);
//     }
//   };
// const updateProject = async () => {
//   try {
//     const token = localStorage.getItem("token");

//     await axios.put(
//       `http://localhost:5000/api/projects/${editingProjectId}`,
//       {
//         title,
//         description,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     alert("Project Updated Successfully!");

//     setTitle("");
//     setDescription("");
//     setEditingProjectId(null);

//     fetchProjects();
//   } catch (error) {
//     console.log(error.response?.data);
//     alert(error.response?.data?.message || "Failed to update project");
//   }
// };
//   // Create project
//   const createProject = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       await axios.post(
//         "http://localhost:5000/api/projects",
//         {
//           title,
//           description,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Project Created Successfully!");

//       setTitle("");
//       setDescription("");

//       fetchProjects();
//     } catch (error) {
//       console.log(error.response?.data);
//       alert(error.response?.data?.message || "Failed to create project");
//     }
//   };

//   // Delete project
//   const deleteProject = async (projectId) => {
//     try {
//       const token = localStorage.getItem("token");

//       await axios.delete(
//         `http://localhost:5000/api/projects/${projectId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Project Deleted Successfully!");

//       fetchProjects();
//     } catch (error) {
//       console.log(error.response?.data);
//       alert(error.response?.data?.message || "Failed to delete project");
//     }
//   };

//   // Logout
//   const logout = () => {
//     localStorage.removeItem("token");
//     alert("Logged out successfully");
//     navigate("/");
//   };

//   return (
   
//   <div
//     style={{
//       minHeight: "100vh",
//       backgroundColor: "#f4f7fc",
//       padding: "40px",
//       fontFamily: "Arial, sans-serif",
//     }}
//   >
//       {/* Header */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginBottom: "30px",
//         }}
//       >
//         <h1>Dashboard</h1>
//         <div
//   style={{
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "30px",
//   }}
// >
//   <div>
//     <h1
//       style={{
//         margin: 0,
//         color: "#1d4ed8",
//       }}
//     >
//       TeamFlow Dashboard
//     </h1>

//     <p
//       style={{
//         color: "gray",
//       }}
//     >
//       Manage your projects easily
//     </p>
//   </div>

//   <button
//     onClick={logout}
//     style={{
//       background: "red",
//       color: "white",
//       padding: "10px 20px",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//     }}
//   >
//     Logout
//   </button>
// </div>
//       </div>

//       {/* Create Project */}
//       <div
//   style={{
//     background: "white",
//     padding: "25px",
//     borderRadius: "10px",
//     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//     marginBottom: "30px",
//   }}
// ></div>
//       <h2>Create Project</h2>

//       <input
//         type="text"
//         placeholder="Project Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={{
//           display: "block",
//           width: "350px",
//           padding: "10px",
//           marginBottom: "10px",
//         }}
//       />

//       <textarea
//         placeholder="Project Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         style={{
//           display: "block",
//           width: "350px",
//           height: "80px",
//           padding: "10px",
//           marginBottom: "10px",
//         }}
//       />

//       {/* <button
//         onClick={createProject}
//         style={{
//           padding: "10px 20px",
//           marginBottom: "30px",
//           cursor: "pointer",
//         }}
//       >
//         Create Project
//       </button> */}
//       <button
//   onClick={
//     editingProjectId
//       ? updateProject
//       : createProject
//   }
// >
//   {editingProjectId ? "Update Project" : "Create Project"}
// </button>

//       {/* Project List */}
//       <h2>Projects</h2>

//       {projects.length === 0 ? (
//         <p>No Projects Found</p>
//       ) : (
//         projects.map((project) => (
//           <Link
//             key={project._id}
//             to={`/project/${project._id}`}
//             style={{
//               textDecoration: "none",
//               color: "black",
//             }}
//           >
//             <div
//               style={{
//                 border: "1px solid gray",
//                 padding: "15px",
//                 marginBottom: "15px",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//               }}
//             >
//               <h3>{project.title}</h3>

//               <p>{project.description}</p>

//               <button
//                 onClick={(e) => {
//                   e.preventDefault();

//                   if (
//                     window.confirm(
//                       "Are you sure you want to delete this project?"
//                     )
//                   ) {
//                     deleteProject(project._id);
//                   }
//                 }}
//                 style={{
//                   background: "red",
//                   color: "white",
//                   border: "none",
//                   padding: "8px 15px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Delete Project
//               </button>
//               <button
//   onClick={(e) => {
//     e.preventDefault();

//     setEditingProjectId(project._id);
//     setTitle(project.title);
//     setDescription(project.description);
//   }}
//   style={{
//     background: "orange",
//     color: "white",
//     border: "none",
//     padding: "8px 15px",
//     marginLeft: "10px",
//     cursor: "pointer",
//   }}
// >
//   Edit Project
// </button>
//             </div>
//           </Link>
//         ))
//       )}
//     </div>
//   );
// }

// export default Dashboard;









































import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingProjectId, setEditingProjectId] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  // Fetch Projects
  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/projects",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProjects(res.data.projects);
    } catch (error) {
      console.log(error.response?.data || error);
    }
  };

  // Create Project
  const createProject = async () => {
    if (!title || !description) {
      return alert("Please fill all fields");
    }

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/projects",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Project Created Successfully!");

      setTitle("");
      setDescription("");

      fetchProjects();
    } catch (error) {
      alert(error.response?.data?.message || "Failed");
    }
  };

  // Update Project
  const updateProject = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/projects/${editingProjectId}`,
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Project Updated Successfully!");

      setTitle("");
      setDescription("");
      setEditingProjectId(null);

      fetchProjects();
    } catch (error) {
      alert(error.response?.data?.message || "Failed");
    }
  };

  // Delete Project
  const deleteProject = async (projectId) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/projects/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Project Deleted Successfully!");

      fetchProjects();
    } catch (error) {
      alert(error.response?.data?.message || "Delete Failed");
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    alert("Logged Out Successfully");
    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fc",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              color: "#2563eb",
            }}
          >
            TeamFlow Dashboard
          </h1>

          <p
            style={{
              color: "#666",
            }}
          >
            Manage your projects and tasks efficiently
          </p>
        </div>

        <button
          onClick={logout}
          style={{
            background: "#ef4444",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* Statistics */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            width: "220px",
            borderRadius: "10px",
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Total Projects</h3>
          <h1>{projects.length}</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            width: "220px",
            borderRadius: "10px",
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Status</h3>
          <p>Ready to manage your work!</p>
        </div>
      </div>

      {/* Create Project */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          marginBottom: "40px",
        }}
      >
        <h2>
          {editingProjectId ? "Update Project" : "Create New Project"}
        </h2>

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            height: "90px",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={
            editingProjectId
              ? updateProject
              : createProject
          }
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {editingProjectId
            ? "Update Project"
            : "Create Project"}
        </button>
      </div>

      {/* Project List */}
      <h2 style={{ marginBottom: "20px" }}>
        My Projects
      </h2>

      {projects.length === 0 ? (
        <p>No Projects Found</p>
      ) : (
        projects.map((project) => (
          <div
            key={project._id}
            style={{
              background: "white",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "10px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#2563eb" }}>
              📁 {project.title}
            </h2>

            <p>{project.description}</p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <button
                onClick={() =>
                  navigate(`/project/${project._id}`)
                }
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Open
              </button>

              <button
                onClick={() => {
                  setEditingProjectId(project._id);
                  setTitle(project.title);
                  setDescription(project.description);
                }}
                style={{
                  background: "#f59e0b",
                  color: "white",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>

              <button
                onClick={() => {
                  if (
                    window.confirm(
                      "Delete this project?"
                    )
                  ) {
                    deleteProject(project._id);
                  }
                }}
                style={{
                  background: "#dc2626",
                  color: "white",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;