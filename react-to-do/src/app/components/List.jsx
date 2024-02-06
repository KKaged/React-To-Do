import { useState } from "react";

export default function ListTable() {
  const [editing, setEditing] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  function toggleFinished(index) {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        // Toggle the finished status of the clicked task
        return { ...task, isFinished: !task.isFinished };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <div className="flex flex-col w-96 gap-3">
        <div className="flex justify-between">
          {!editing ? (
            <>
              <h1 className="text-2xl font-light text-white">
                Your list for today
              </h1>
              <button
                className="border-2 font-light text-white text-lg rounded border-lime-900 bg-lime-700 hover:bg-lime-800"
                onClick={() => setEditing(!editing)}
              >
                Add
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                className="border-2 font-light text-xl rounded border-lime-900 bg-lime-100 hover:bg-lime-200"
                placeholder="Add a task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <button
                className="border-2 font-light text-white text-lg rounded border-lime-900 bg-lime-700 hover:bg-lime-800"
                onClick={() => {
                  setTasks([...tasks, { name: taskName, isFinished: false }]);
                  setTaskName("");
                  setEditing(!editing);
                }}
              >
                Add
              </button>
            </>
          )}
        </div>
        <table className="w-full bg-white rounded-lg">
          <thead>
            <tr>
              <th className="text-left">Task</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td className=" flex text-left font-light gap-5">
                  <input
                    type="checkbox" // Use checkbox for better UX
                    checked={task.isFinished}
                    onChange={() => toggleFinished(index)}
                  />
                  <span
                    style={{
                      textDecoration: task.isFinished ? "line-through" : "none",
                    }}
                  >
                    {task.name}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
