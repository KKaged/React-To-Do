"use client";

import NameInput from "./components/NameInput";
import WelcomeBox from "./components/WelcomeBox";
import ListTable from "./components/List";
import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState({
    name: "",
    isTyped: false,
  });

  function handleChange(event) {
    setUserInput((prev) => ({
      ...prev,
      name: event.target.value,
    }));
  }

  function whenPressed() {
    if (userInput.name.length > 1) {
      setUserInput((prev) => ({
        ...prev,
        isTyped: true,
      }));
    }
  }

  return (
    <>
      {!userInput.isTyped && (
        <NameInput
          userInput={userInput.name}
          onChange={handleChange}
          whenPressed={whenPressed}
        />
      )}

      {userInput.isTyped && userInput.name.length > 1 && (
        <>
          <WelcomeBox userInput={userInput} />
          <ListTable />
        </>
      )}
    </>
  );
}
