"use client";

export default function NameInput({ userInput, onChange, whenPressed }) {
  return (
    <div className="flex flex-col  w-64 align-center gap-3">
      <label
        className="text-center text-white font-light text-xl"
        htmlFor="Your Name"
      >
        Enter Your Name
      </label>
      <input
        type="text"
        className="border-2  font-light text-xl rounded border-lime-900 bg-lime-100 hover:bg-lime-200"
        placeholder="Name"
        value={userInput}
        onChange={onChange}
      />
      <button
        className="border-2 font-light text-xl rounded border-lime-900 bg-lime-700 hover:bg-lime-800"
        onClick={whenPressed}
      >
        Submit
      </button>
    </div>
  );
}
