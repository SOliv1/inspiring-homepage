import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JournalEntries from "./components/JournalEntries";
import { addJournalEntry } from "./journalSlice";

const Journal = () => {
  const [newJournalEntry, setNewJournalEntry] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (newJournalEntry === "") {
      return;
    }

    dispatch(addJournalEntry(newJournalEntry));
    setNewJournalEntry("");
  };

  return (
    <>
      <div id="journal" className="surface">
        <h2>What would you like to do today?</h2>

        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            className="journal-input"
            value={newJournalEntry}
            onChange={(e) => {
              setNewJournalEntry(e.target.value);
            }}
            aria-label="New journal entry"
          />
        </form>
      </div>
      <JournalEntries />
    </>
  );
};

export default Journal;
