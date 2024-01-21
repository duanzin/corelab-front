import styled from "styled-components";
import Note from "./note";
import { NoteData } from "../interfaces";

type SetNotesFunction = React.Dispatch<React.SetStateAction<NoteData[]>>;

interface Props {
  name: string;
  notes: NoteData[];
  setNotes: SetNotesFunction
}

export default function NoteSection({
  name,
  notes,
  setNotes
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
            bgColor={data.color}
            setNotes={setNotes}
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
  width: 77.125rem;
  @media (max-width: 81.125rem) {
    width: 50.85rem;
  }
  @media (max-width: 54.85rem) {
    width: 24.375rem;
  }
  @media (max-width: 30.625rem) {
    width: 80%;
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
