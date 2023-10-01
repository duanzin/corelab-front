import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

interface FormData {
  id: string;
  title: string;
  text: string;
  favorite: boolean;
  color: string;
}

type SetNotesFunction = React.Dispatch<React.SetStateAction<FormData[]>>;

interface NoteFormProps {
  notes: FormData[];
  setNotes: SetNotesFunction;
}

export default function NoteForm({ notes, setNotes }: NoteFormProps) {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    title: "",
    text: "",
    favorite: false,
    color: "#FFFFFF",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTitle = formData.title.trim();
    const trimmedText = formData.text.trim();
    if (!trimmedTitle || !trimmedText) {
      alert("Escreva algo que não seja só espaços!");
    } else {
      const newNote = {
        ...formData,
        id: uuidv4(),
        title: trimmedTitle,
        text: trimmedText,
      };
      setNotes([...notes, newNote]);
    }
    setFormData({
      id: "",
      title: "",
      text: "",
      favorite: false,
      color: "#FFFFFF",
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        name="title"
        maxLength={24}
        value={formData.title}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Título"
        required
      />
      <input
        type="text"
        id="text"
        name="text"
        maxLength={300}
        value={formData.text}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Criar nota..."
        required
      />
      <button type="submit">Enviar</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 33.125rem;
  height: 8rem;
  background-color: #d9d9d9;
  border-radius: 3px;
  padding: 1px;
  row-gap: 1px;
  box-shadow: 1px 1px 3px 0px #00000040;
  @media (max-width: 54.85rem) {
    width: 24.375rem;
    border-radius: 25px;
    box-shadow: 1px 2px 3px 0px #00000040;
  }
  input {
    border: none;
    padding: 0 1rem;
    margin: 0;
    outline: none;
    background-color: #ffffff;
    width: 100%;
  }
  button {
    border: none;
    padding: 0 1rem;
    cursor: pointer;
    background-color: #ffffff;
    color: #4f4f4d;
    width: 100%;
    height: 20%;
    border-radius: 0 0 3px 3px;
    @media (max-width: 54.85rem) {
      border-radius: 0 0 25px 25px;
    }
  }
  :first-child {
    border-radius: 3px 3px 0 0;
    height: 25%;
    @media (max-width: 54.85rem) {
      border-radius: 25px 25px 0 0;
    }
  }
  :nth-child(2) {
    height: 55%;
  }
`;
