import styled from "styled-components";
import Note from "./note";

interface FormData {
  id: string;
  title: string;
  text: string;
  favorite: boolean;
}

interface Props {
  name: string;
  notes: FormData[];
  toggleFavorite: (id: string) => void;
  handleDeleteNote: (id: string) => void;
}

export default function NoteSection({
  name,
  notes,
  toggleFavorite,
  handleDeleteNote,
}: Props) {
  return (
    <StyledSection>
      <h2>{name}</h2>
      <ul>
        {notes.map((data) => (
          <Note
            key={data.id}
            id={data.id}
            title={data.title}
            text={data.text}
            favorite={data.favorite}
            onToggleFavorite={() => toggleFavorite(data.id)}
            onDelete={() => handleDeleteNote(data.id)}
          />
        ))}
      </ul>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 0.75rem;
  min-width: 24.375rem;
  width: 77.125rem;
  @media (max-width: 81.125rem) {
    width: 50.85rem;
  }
  @media (max-width: 54.85rem) {
    width: 24.375rem;
  }
  h2 {
    margin-left: 1.25rem;
    width: fit-content;
    font-size: 0.75rem;
    color: #464646;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    gap: 2rem;
  }
`;
