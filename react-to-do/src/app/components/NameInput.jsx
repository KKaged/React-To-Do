"use client";

import { useState } from "react";

export default function NameInput({ userInput, onChange, whenPressed }) {
  return (
    <div className="flex flex-col  w-64 align-center gap-3">
      <label className="text-center" htmlFor="Your Name">
        Enter Your Name
      </label>
      <input
        type="text"
        placeholder="Name"
        value={userInput}
        onChange={onChange}
      />
      <button className="bg-lime-700 hover:bg-lime-800" onClick={whenPressed}>
        Submit
      </button>
    </div>
  );
}
