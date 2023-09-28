import { useState } from "react";
import styled from "styled-components";
import Note from "./components/note";

interface FormData {
  title: string;
  text: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({ title: "", text: "" });
  const [notes, setNotes] = useState<FormData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotes([...notes, formData]);
    setFormData({ title: "", text: "" });
  };

  return (
    <>
      <Header>
        <h1>CoreNotes</h1>
        <input type="search" placeholder="Pesquisar notas" />
      </Header>
      <Main>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Título"
            required
          />
          <input
            type="text"
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="Criar nota..."
            required
          />
          <button type="submit">Enviar</button>
        </Form>
        <section>
          <ul>
            {notes.map((data, index) => (
              <Note key={index} title={data.title} text={data.text} />
            ))}
          </ul>
        </section>
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
  padding: 0 5%;
  row-gap: 1.5rem;
`;

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
  input {
    border: none;
    padding: 0 1rem;
    margin: 0;
    outline: none;
    background-color: #ffffff;
    width: 100%;
  }
  button{
    border: none;
    padding: 0 1rem;
    cursor: pointer;
    background-color: #ffffff;
    color: #4F4F4D;
    width: 100%;
    height: 15%;
    border-radius: 0 0 3px 3px;
  }
  :first-child {
    border-radius: 3px 3px 0 0;
    height: 25%;
  }
  :nth-child(2) {
    height: 60%;
  }
`;
