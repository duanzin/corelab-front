import { useState } from "react";
import styled from "styled-components";
import ColorPanel from "./colorSelection";
import {
  RiPaintFill,
  RiPencilLine,
  RiCloseLine,
  RiStarFill,
  RiSendPlaneFill,
} from "react-icons/ri";

interface Props {
  id: string;
  title: string;
  text: string;
  favorite: boolean;
  bgColor: string;
  onToggleFavorite: () => void;
  onDelete: () => void;
  onColorChange: (color: string) => void;
  onUpdate: (newTitle: string, newText: string) => void;
}

export default function Note({
  title,
  text,
  favorite,
  bgColor,
  onToggleFavorite,
  onDelete,
  onColorChange,
  onUpdate,
}: Props) {
  const [isColorPanelVisible, setIsColorPanelVisible] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);
  const [isEditing, setIsEditing] = useState(false);
  const iconStyle = {
    fontSize: "1.5rem",
    cursor: "pointer",
    color: favorite ? "#FFAC1C" : "inherit",
  };

  const handleDelete = () => {
    onDelete();
  };

  const handleColorClick = () => {
    setIsColorPanelVisible(!isColorPanelVisible);
  };

  const handleColorChange = (selectedColor: string) => {
    onColorChange(selectedColor);
    setIsColorPanelVisible(false);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  const handleUpdateSubmit = (newTitle: string, newText: string) => {
    if (newTitle.trim() && newText.trim()) onUpdate(newTitle, newText);
    setIsEditing(false);
  };

  return (
    <StyledLi bgcolor={bgColor}>
      <h3>
        {isEditing ? (
          <input
            type="text"
            id="title"
            name="title"
            maxLength={24}
            value={newTitle}
            onChange={handleTitleChange}
            placeholder="Título"
            autoComplete="off"
          />
        ) : (
          title
        )}
        <RiStarFill
          style={iconStyle}
          onClick={onToggleFavorite}
          className={favorite ? "favorite" : ""}
        />
      </h3>
      <p>
        {isEditing ? (
          <input
            type="text"
            id="text"
            name="text"
            maxLength={300}
            value={newText}
            onChange={handleTextChange}
            placeholder="Criar nota..."
            autoComplete="off"
          />
        ) : (
          text
        )}
      </p>
      <div>
        <RiPencilLine
          style={{ ...iconStyle, color: "inherit" }}
          onClick={handleEditClick}
        />
        {isEditing ? (
          <RiSendPlaneFill
            style={{ ...iconStyle, color: "inherit" }}
            onClick={() => handleUpdateSubmit(newTitle, newText)}
          />
        ) : (
          <>
            <RiPaintFill
              style={{ ...iconStyle, color: "inherit" }}
              onClick={handleColorClick}
            />
            <RiCloseLine
              style={{ ...iconStyle, color: "inherit" }}
              onClick={handleDelete}
            />
          </>
        )}
        {isColorPanelVisible && (
          <ColorPanel onColorChange={handleColorChange} />
        )}
      </div>
    </StyledLi>
  );
}

const StyledLi = styled.li<{ bgcolor: string }>`
  position: relative;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  width: 24.375rem;
  height: 27.313rem;
  background-color: ${(props) => props.bgcolor};
  color: #4f4f4d;
  border-radius: 25px;
  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10.6%;
    font-size: 0.875rem;
    font-weight: 700;
    padding: 0 1.25rem;
    border-bottom: 1px solid #d9d9d9;
  }
  p {
    width: 100%;
    height: 78.8%;
    overflow-wrap: break-word;
    font-size: 0.813rem;
    padding: 0.8rem 1.25rem;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 10.6%;
    padding: 0.8rem 1.25rem;
  }
  input {
    border: none;
    margin: 0;
    outline: none;
    width: 100%;
    background-color: transparent;
  }
`;
