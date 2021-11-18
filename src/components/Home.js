import Tasks from "./Tasks";
import AddTask from "./AddTask";

function Home({ showAddTask, addTask, tasks, toggleReminder, deleteTask }) {
  return (
    <div>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default Home;
