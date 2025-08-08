import { useState } from "react";
import { nanoid } from 'nanoid';
import { toast } from "react-toastify";

function TaskInput(props) {
const { todo, settodo } = props;
  const [title, settitle] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: nanoid(),
      title: title,
      important: false,
      completed: false,
    };
    settodo( [...todo, newTask]);
    settitle(" "); // Clear input after adding task
   toast.success("Task added successfully!"); 
  };

  return (
    <form className="flex gap-2 mb-4" onSubmit={HandleSubmit}>
      <input
        onChange={(e) => settitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Add new task..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-thin"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition font-thin">
        Add
      </button>
    </form>
  );
}
export default TaskInput;
