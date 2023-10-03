import React, { useState } from "react";
import styled from "styled-components";
import { createNote } from "../api/route";
import { NoteData, FormData } from "../interfaces";

type SetNotesFunction = React.Dispatch<React.SetStateAction<NoteData[]>>;

interface NoteFormProps {
  setNotes: SetNotesFunction;
}

export default function NoteForm({ setNotes }: NoteFormProps) {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    text: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTitle: string = formData.title.trim();
    const trimmedText: string = formData.text.trim();
    if (!trimmedTitle || !trimmedText) {
      alert("Escreva algo que não seja só espaços!");
    } else {
      try {
        const newNote: FormData = {
          ...formData,
          title: trimmedTitle,
          text: trimmedText,
        };
        const response: NoteData[] = await createNote(newNote);
        console.log(response);
        setNotes(response);
      } catch (error) {
        console.error(error);
      }
    }
    setFormData({
      title: "",
      text: "",
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
      <textarea
        id="text"
        name="text"
        maxLength={677}
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
    border-radius: 3px 3px 0 0;
    height: 25%;
    @media (max-width: 54.85rem) {
      border-radius: 25px 25px 0 0;
    }
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
  textArea {
    border: none;
    padding: 0;
    outline: none;
    height: 55%;
    width: 100%;
    padding: 0 1rem;
    background-color: #ffffff;
    resize: none;
  }
`;
