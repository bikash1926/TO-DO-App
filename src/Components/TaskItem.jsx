import { toast } from "react-toastify";
function TaskItem({ task, todo, settodo }) {
  const DeleteHandler = (id) => {
    const updatedTodo = todo.filter((item) => item.id !== id);
    settodo(updatedTodo); // Update state
    toast.error("delete the task by clicking on it")
  }
  return (
    <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border shadow-sm hover:shadow-md transition font-thin">
      <div className="flex items-center gap-3">
        <input 
        type="checkbox" 
        className="w-5 h-5" />
        <span
          className={`text-base ${
            task.completed ? "line-through text-gray-400" : "text-gray-700"
          }`}
        >
          {task.title}
        </span>
        {task.important && (
          <span className="ml-2 px-2 py-0.5 text-xs bg-red-100 text-red-500 rounded-full">
            Important
          </span>
        )}
      </div>
      <button className="text-red-400 hover:text-red-600"  onClick={() => DeleteHandler(task.id)}>🗑</button>
    </li>
  );
}
export default TaskItem;