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
  function deleteTask(index) {
    const newTasks = tasks.filter((task, i) => i !== index);
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
              <div className="flex gap-2">
                <button
                  className="border-2 font-light text-white text-lg rounded border-lime-900 bg-lime-700 hover:bg-lime-800"
                  onClick={() => {
                    setEditing(!editing);
                    setTaskName("");
                  }}
                >
                  Cancel
                </button>
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
              </div>
            </>
          )}
        </div>
        <table className="w-full bg-white rounded-lg ">
          <thead>
            <tr>
              <th className="text-center text-lg font-medium">Task</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td className=" flex text-left font-light gap-5 text-xl mx-3">
                  <input
                    type="checkbox"
                    className="accent-green-900 "
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
                  <button
                    className="text-red-700 font-light text-xl hover:animate-pulse"
                    onClick={() => deleteTask(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
