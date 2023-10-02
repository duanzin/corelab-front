import { useState, useEffect } from "react";
import styled from "styled-components";
import NoteForm from "./components/form";
import NoteSection from "./components/section";
import { getNotes } from "./api/route";
import { NoteData } from "./interfaces";

function App() {
  const [notes, setNotes] = useState<NoteData[]>([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response: NoteData[] = await getNotes();
        setNotes(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNotes();
  }, []);

  return (
    <>
      <Header>
        <h1>CoreNotes</h1>
        <input type="search" placeholder="Pesquisar notas" />
      </Header>
      <Main>
        <NoteForm setNotes={setNotes} />
        {notes.some((data) => data.favorite) && (
          <NoteSection
            name="Favoritos"
            notes={notes.filter((data) => data.favorite)}
            setNotes={setNotes}
          />
        )}
        {notes.some((data) => !data.favorite) && (
          <NoteSection
            name="Outras"
            notes={notes.filter((data) => !data.favorite)}
            setNotes={setNotes}
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
