import Header from "./Components/Header";
import TaskInput from "./Components/TaskInput";
import FilterTabs from "./Components/FilterTabs";
import TaskList from "./Components/TaskList";
import { useState } from "react";
import { nanoid } from 'nanoid';


export default function App() {
  const [todo, settodo] = useState([
    { id: nanoid(), title: "Buy groceries", important: false, completed: false },
  ]);
  const [filter, setFilter] = useState("All");
  return (
    <div className="min-h-screen bg-gray-700 p-6">
      <div className="max-w-2xl mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 shadow-orange-200 shadow-xl rounded-xl p-6">
        <Header />
        <TaskInput  todo={todo} settodo={settodo}/>
        <FilterTabs todo={todo} settodo={settodo} filter={filter} setFilter={setFilter}/>
        <TaskList todo={todo} settodo={settodo} />
      </div>
    </div>
  );
}
