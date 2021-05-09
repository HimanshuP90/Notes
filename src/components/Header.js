import React from "react";

function Header({ handleToggleDarMode }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <span>Create notes and feel the satisfaction</span>
      <button
        className="save"
        onClick={() =>
          handleToggleDarMode((previousDarkMode) => !previousDarkMode)
        }
      >
        Toggle
      </button>
    </div>
  );
}

export default Header;
