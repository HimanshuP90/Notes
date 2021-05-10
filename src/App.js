import { useEffect, useState } from "react";
import "./App.css";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Breakfast @ 8:00AM",
      date: "09/05/2021",
    },
    {
      id: nanoid(),
      text: "Start checking mail, if somethin important then revert",
      date: "29/04/2021",
    },
    {
      id: nanoid(),
      text: "Daily Standup call wigth teammates",
      date: "19/05/2021",
    },
    {
      id: nanoid(),
      text: "Discussion with peers for new task",
      date: "12/03/2021",
    },
    {
      id: nanoid(),
      text: "Thinking start how to design modal",
      date: "09/05/2021",
    },
    {
      id: nanoid(),
      text: "Implementation start for the task",
      date: "11/02/2021",
    },
    {
      id: nanoid(),
      text: "Write test case for the modal component",
      date: "07/04/2021",
    },
  ]);

  const playerNames = [
    'Kane Williamson',
    'Steven Smith',
    'Joe Root',
    'Virat Kohli',
    'Rishabh Pant',
    'Rohit Sharma',
    'David Warner',
    'Ben Stokes'
  ]
  
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNOte={deleteNote}
        />
      </div>
      <AutoComplete names={playerNames} />

    </div>
  );
}

export default App;
