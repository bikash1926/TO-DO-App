import TaskItem from "./TaskItem";


 function TaskList(props) {
  // Just mock 3 UI tasks
  const filter=props.filter
   const todo = props.todo;
   const settodo = props.settodo;
  return (
    <ul className="space-y-3">
      {todo.map((task) => (
        <TaskItem key={task.id} task={task} settodo={settodo} todo={todo}/>
      ))}
    </ul>
  );
}
export default TaskList;