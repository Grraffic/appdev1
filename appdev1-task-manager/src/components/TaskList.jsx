import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import "/public/css/style.css";
import { db } from "../firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const TaskList = ({ user }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const collectionRef = collection(db, "tasks");
      const getCollection = await getDocs(collectionRef);
      const tasks = getCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasks);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTask = async (e) => {
    e.preventDefault();

    if (!title || !description) return;

    const collectionRef = collection(db, "tasks");
    const docRef = await addDoc(collectionRef, {
      title: title,
      description: description,
      status: "Pending",
    });

    setTasks([
      ...tasks, //spread operator cinocopy nya lang yung laman
      {
        id: docRef.id,
        title: title,
        description: description,
        status: "Pending",
      },
    ]);

    setTitle("");
    setDescription("");
  };

  const handleCompleteTask = async (id, status) => {
    const taskRef = doc(db, "tasks", id);
    await updateDoc(taskRef, {
      status: status === "Pending",
    });
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Pending" ? "Completed" : "Pending",
            }
          : task
      )
    );
  };

  const handleDeleteTask = async (id) => {
    const taskRef = doc(db, "tasks", id);
    await deleteDoc(taskRef);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="container">
        <div className="user">
          <h1 className="name">Welcome, {user}</h1>
        </div>

        <h2 className="task">Task lists:</h2>
        <form className="form">
          <input
            className="input"
            type="text"
            placeholder="Add Task"
            value={title}
            onChange={handleTitleChange}
            required
          />
          <div className="area">
            <input
              className="textarea"
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </div>

          <button onClick={handleAddTask}>
            <IoIosAddCircle />
            Add Task
          </button>
        </form>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <p>Title: {task.title}</p>
              <p>Description: {task.description}</p>
              <p>Status: {task.status}</p>
              {/* BUTTON */}
              <button onClick={() => handleCompleteTask(task.id, task.status)}>
                <IoMdCheckmarkCircle />
                Completed
              </button>
              <button onClick={() => handleDeleteTask(task.id)}>
                <MdDelete />
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
