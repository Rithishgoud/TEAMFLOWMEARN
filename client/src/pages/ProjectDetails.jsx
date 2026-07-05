// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function ProjectDetails() {
//   const { id } = useParams();

//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");
// const [description, setDescription] = useState("");
// const [project, setProject] = useState(null);

//   useEffect(() => {
//     fetchTasks();
//      fetchProject();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await axios.get(
//         `http://localhost:5000/api/tasks/project/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setTasks(res.data.tasks);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const fetchProject = async () => {
//   try {
//     const token = localStorage.getItem("token");

//     const res = await axios.get(
//       `http://localhost:5000/api/projects/${id}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     setProject(res.data.project);
//   } catch (error) {
//     console.log(error.response?.data || error);
//   }
// };
//   const createTask = async () => {
//   try {
//     const token = localStorage.getItem("token");
//     console.log("Project ID:", id);
// console.log("Token:", localStorage.getItem("token"));

//     await axios.post(
//       "http://localhost:5000/api/tasks",
//       {
//         title,
//         description,
//         project: id,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     alert("Task Created Successfully!");

//     setTitle("");
//     setDescription("");

//     fetchTasks();
//   }catch (error) {
//   console.log(error.response?.data);
//   alert(error.response?.data?.message || "Failed to create task");
// } 
 
// };
// const updateTaskStatus = async (taskId, status) => {
//   try {
//     const token = localStorage.getItem("token");

//     await axios.put(
//       `http://localhost:5000/api/tasks/${taskId}`,
//       { status },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     fetchTasks();
//   } catch (error) {
//     console.log(error.response?.data);
//     alert("Failed to update status");
//   }
// };
// const deleteTask = async (taskId) => {
//   try {
//     const token = localStorage.getItem("token");

//     await axios.delete(
//       `http://localhost:5000/api/tasks/${taskId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     alert("Task Deleted Successfully!");

//     fetchTasks();
//   } catch (error) {
//   console.log(error.response?.data);
//   alert(error.response?.data?.message || "Failed to delete task");
// }}

//   return (
//     <div style={{ padding: "30px" }}>
//       <h1>Project Details</h1>
//       <div style={{ marginBottom: "20px" }}>
//   <input
//     type="text"
//     placeholder="Task Title"
//     value={title}
//     onChange={(e) => setTitle(e.target.value)}
//     style={{
//       display: "block",
//       width: "300px",
//       marginBottom: "10px",
//       padding: "10px",
//     }}
//   />

//   <textarea
//     placeholder="Task Description"
//     value={description}
//     onChange={(e) => setDescription(e.target.value)}
//     style={{
//       display: "block",
//       width: "300px",
//       height: "80px",
//       marginBottom: "10px",
//       padding: "10px",
//     }}
//   />

//   <button onClick={createTask}>
//     Create Task
//   </button>
// </div>
//        {project && (
//   <div
//     style={{
//       border: "1px solid gray",
//       padding: "15px",
//       marginBottom: "20px",
//       borderRadius: "8px",
//     }}
//   >
//     <h2>{project.title}</h2>

//     <p>{project.description}</p>
//   </div>
// )}
//       <h2>Tasks</h2>

//       {tasks.length === 0 ? (
//         <p>No Tasks Found</p>
//       ) : (
//         tasks.map((task) => (
//           <div
//             key={task._id}
//             style={{
//               border: "1px solid gray",
//               marginBottom: "10px",
//               padding: "10px",
//             }}
//           >
//             <h3>{task.title}</h3>

// <p>
//   <strong>Description:</strong> {task.description}
// </p>


// <div style={{ marginTop: "10px" }}>
//   <strong>Status:</strong>

//   <select
//     value={task.status}
//     onChange={(e) =>
//       updateTaskStatus(task._id, e.target.value)
//     }
//     style={{
//       marginLeft: "10px",
//       padding: "5px",
//     }}
//   >
//     <option value="Pending">Pending</option>
//     <option value="In Progress">In Progress</option>
//     <option value="Completed">Completed</option>
//   </select>
// </div>
//              <button onClick={() => deleteTask(task._id)}>
//     Delete
//   </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }


// export default ProjectDetails;





























import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProjectDetails() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchProject();
    fetchTasks();
  }, []);

  // Fetch Project
  const fetchProject = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:5000/api/projects/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProject(res.data.project);
    } catch (error) {
      console.log(error.response?.data || error);
    }
  };

  // Fetch Tasks
  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:5000/api/tasks/project/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(res.data.tasks);
    } catch (error) {
      console.log(error.response?.data || error);
    }
  };

  // Create Task
  const createTask = async () => {
    if (!title || !description) {
      return alert("Please fill all fields");
    }

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/tasks",
        {
          title,
          description,
          project: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Task Created Successfully!");

      setTitle("");
      setDescription("");

      fetchTasks();
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || "Failed to create task");
    }
  };

  // Update Status
  const updateTaskStatus = async (taskId, status) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/tasks/${taskId}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchTasks();
    } catch (error) {
      console.log(error.response?.data);
      alert("Failed to update task");
    }
  };

  // Delete Task
  const deleteTask = async (taskId) => {
    if (!window.confirm("Delete this task?")) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/tasks/${taskId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Task Deleted Successfully!");

      fetchTasks();
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || "Failed to delete task");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      {/* Project Card */}

      {project && (
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              color: "#2563eb",
              marginBottom: "10px",
            }}
          >
            📁 {project.title}
          </h1>

          <p>{project.description}</p>
        </div>
      )}

      {/* Create Task */}

      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
        }}
      >
        <h2>Create New Task</h2>

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            height: "100px",
            padding: "12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "15px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={createTask}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          Create Task
        </button>
      </div>

      {/* Task List */}

      <h2 style={{ marginBottom: "20px" }}>Tasks</h2>

      {tasks.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            style={{
              background: "#fff",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>📌 {task.title}</h3>

            <p>
              <strong>Description:</strong> {task.description}
            </p>

            <div style={{ marginTop: "15px" }}>
              <strong>Status:</strong>

              <select
                value={task.status}
                onChange={(e) =>
                  updateTaskStatus(task._id, e.target.value)
                }
                style={{
                  marginLeft: "10px",
                  padding: "8px",
                  borderRadius: "5px",
                }}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <button
              onClick={() => deleteTask(task._id)}
              style={{
                marginTop: "20px",
                background: "#dc2626",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Delete Task
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProjectDetails;