import styled from "styled-components";

interface Props {
    title: string;
    text: string;
  }

export default function Note({ title, text }:Props) {
  return (
    <StyledLi>
      <h3>{title}</h3>
      <div>
        <p>{text}</p>
      </div>
    </StyledLi>
  );
}

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 24.375rem;
  height: 27.313rem;
  background-color: #ffffff;
  color: #4f4f4d;
  border-radius: 25px;
  h3 {
    width: 100%;
    height: 10.6%;
    font-size: 0.875rem;
    font-weight: 700;
    padding: 1.25rem 1rem 0 1rem;
    border-bottom: 1px solid #d9d9d9;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.8rem 1rem;
    height: 89.4%;
    font-size: 0.813rem;
  }
  p {
    width: 100%;
    overflow-wrap: break-word;
  }
`;
