import styled from "styled-components";

function App() {
  return (
    <>
      <Header>
        <h1>CoreNotes</h1>
        <input type="search" placeholder="Pesquisar notas" />
      </Header>
      <Main>
        <Form>
          <input type="text" placeholder="Título" />
          <input type="text" placeholder="Criar nota..." />
        </Form>
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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 33.125rem;
  height: 6.438rem;
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
  :first-child {
    border-radius: 3px 3px 0 0;
    height: 40%;
  }
  :last-child {
    border-radius: 0 0 3px 3px;
    height: 60%;
  }
`;
