import styled from "styled-components";
import { editColor } from "../api/route";
import { NoteData, ObjectColor } from "../interfaces";

type SetNotesFunction = React.Dispatch<React.SetStateAction<NoteData[]>>;

interface Props {
  id: number;
  setNotes: SetNotesFunction;
}

export default function ColorPanel({ id, setNotes }: Props) {
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

  const handleColorButtonClick = async (bgcolor: string, id: number) => {
    try {
      const colorObject: ObjectColor = { color: bgcolor };
      const response: NoteData[] = await editColor(colorObject, id);
      setNotes(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ButtonDiv>
      {colorButtons.map((color) => (
        <button
          key={color}
          style={{
            backgroundColor: color,
          }}
          onClick={() => handleColorButtonClick(color, id)}
        ></button>
      ))}
    </ButtonDiv>
  );
}

const ButtonDiv = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -45px;
  box-sizing: content-box;
  display: flex !important;
  flex-wrap: wrap;
  align-items: center;
  width: 35.913rem !important;
  height: fit-content !important;
  padding: 0.305rem !important;
  gap: 0.625rem;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 9px;
  box-shadow: 1px 1px 3px 0px #00000040;
  @media (max-width: 54.85rem) {
    width: 17.938rem !important;
    bottom: -90px;
  }
  button {
    all: unset;
    cursor: pointer;
    height: 2.294rem;
    width: 2.294rem;
    border-radius: 9999px;
  }
`;
