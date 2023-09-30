import { useState } from "react";
import styled from "styled-components";
import NoteForm from "./components/form";
import NoteSection from "./components/section";

interface FormData {
  id: string;
  title: string;
  text: string;
  favorite: boolean;
}

function App() {
  const [notes, setNotes] = useState<FormData[]>([]);

  const toggleFavorite = (id: string) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((note) =>
        note.id === id ? { ...note, favorite: !note.favorite } : note
      );
      return updatedNotes;
    });
  };

  const handleDeleteNote = (idToDelete: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== idToDelete));
  };

  return (
    <>
      <Header>
        <h1>CoreNotes</h1>
        <input type="search" placeholder="Pesquisar notas" />
      </Header>
      <Main>
        <NoteForm notes={notes} setNotes={setNotes} />
        {notes.some((data) => data.favorite) && (
          <NoteSection
            name="Favoritos"
            notes={notes.filter((data) => data.favorite)}
            toggleFavorite={toggleFavorite}
            handleDeleteNote={handleDeleteNote}
          />
        )}
        {notes.some((data) => !data.favorite) && (
          <NoteSection
            name="Outras"
            notes={notes.filter((data) => !data.favorite)}
            toggleFavorite={toggleFavorite}
            handleDeleteNote={handleDeleteNote}
          />
        )}
      </Main>
    </>
  );
}

export default App;

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 3.563rem;
  background-color: #ffffff;
  padding: 0 2rem;
  margin-bottom: 1.5rem;
  column-gap: 0.938rem;
  box-shadow: 0px 1px 7px 0px #95959540;
  h1 {
    color: #455a64;
    font-size: 0.875rem;
  }
  input {
    width: 33.125rem;
    height: 1.75rem;
    padding: 0 0.5rem;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    box-shadow: 1px 1px 3px 0px #00000040;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.5rem;
  margin-bottom: 3.5rem;
`;
