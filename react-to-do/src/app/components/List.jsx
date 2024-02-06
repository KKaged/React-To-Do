"use client";
import { useState } from "react";

export default function ListTable({ addToList }) {
  const [editing, setEditing] = useState(false);
  return (
    <>
      <div className="flex flex-col w-96 gap-3">
        <div className="flex justify-between">
          {!editing ? (
            <h1 className="text-2xl font-light text-white">
              Your list for today
            </h1>
          ) : (
            <input
              type="text"
              className="border-2 font-light text-xl rounded border-lime-900 bg-lime-100 hover:bg-lime-200"
              placeholder="Add a task"
            />
          )}

          <button
            className="border-2 font-light text-white text-lg rounded border-lime-900 bg-lime-700 hover:bg-lime-800"
            onClick={() => setEditing(!editing)}
          >
            Add
          </button>
        </div>
        <table className="w-full bg-white rounded-lg">
          <thead>
            <tr>
              <th className="text-left font-light">Task</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
}
