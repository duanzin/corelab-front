import { useState, useEffect } from "react";
import styled from "styled-components";
import NoteForm from "./components/form";
import NoteSection from "./components/section";
import { getNotes } from "./api/route";
import { NoteData } from "./interfaces";

function App() {
  const [notes, setNotes] = useState<NoteData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredNotes, setFilteredNotes] = useState<NoteData[]>([]);
  const [isColorFilterVisible, setIsColorFilterVisible] = useState(false);
  const colorButtons = [
    "#BAE2FF",
    "#B9FFDD",
    "#FFE8AC",
    "#FFCAB9",
    "#F99494",
    "#9DD6FF",
    "#ECA1FF",
    "#DAFF8B",
    "#FFA285",
    "#CDCDCD",
    "#979797",
    "#A99A7C",
  ];

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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const foundNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNotes(searchTerm.trim() === "" ? [] : foundNotes);
    }
  };

  const handleColorButtonClick = (bgcolor: string) => {
    const foundNotes = notes.filter(
      (note) =>
        bgcolor === "" || note.color.toLowerCase() === bgcolor.toLowerCase()
    );
    setFilteredNotes(foundNotes);
  };

  return (
    <>
      <Header>
        <h1>CoreNotes</h1>
        <input
          type="search"
          id="searchInput"
          name="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Pesquisar notas"
        />
        <button onClick={() => setIsColorFilterVisible(!isColorFilterVisible)}>
          Filtrar por cor
        </button>
        {isColorFilterVisible && (
          <>
            <div>
              {colorButtons.map((color) => (
                <button
                  key={color}
                  style={{
                    backgroundColor: color,
                  }}
                  onClick={() => handleColorButtonClick(color)}
                ></button>
              ))}
            </div>
          </>
        )}
      </Header>
      <Main>
        <NoteForm setNotes={setNotes} />
        {filteredNotes.length === 0 ? (
          <>
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
          </>
        ) : (
          <NoteSection
            name="Notas encontradas"
            notes={filteredNotes}
            setNotes={setNotes}
          />
        )}
      </Main>
    </>
  );
}

export default App;

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 3.563rem;
  background-color: #ffffff;
  padding: 0 2rem;
  margin-bottom: 1.5rem;
  gap: 0.938rem;
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
  button{
    min-width: 5rem;
    padding: 0.25rem;
    background-color: #ffffff;
    color: #455a64;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    box-shadow: 1px 1px 3px 0px #00000040;
  }
  div {
    position: absolute;
    z-index: 1;
    top: 3.563rem;
    right: 1.25rem;
    box-sizing: content-box;
    display: flex !important;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0 .8rem;
    width: 5.5rem;
    height: 17.9rem !important;
    gap: 0.625rem;
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 9px;
    button {
      all: unset;
      cursor: pointer;
      height: 2.294rem;
      width: 2.294rem;
      border-radius: 9999px;
    }
    @media (max-width: 25.875rem) {
    top: 7.25rem;
  }
  }
  @media (max-width: 25.875rem) {
    flex-wrap: wrap;
    justify-content: center;
    height: fit-content;
    padding: 0.5rem;
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
