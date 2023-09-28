import styled from "styled-components";
import {
  RiPaintFill,
  RiPencilLine,
  RiCloseLine,
  RiStarLine,
} from "react-icons/ri";

interface Props {
  title: string;
  text: string;
}

export default function Note({ title, text }: Props) {
  const iconStyle = { fontSize: "1.5rem", cursor: "pointer" };
  return (
    <StyledLi>
      <h3>
        {title}
        <RiStarLine style={iconStyle}/>
      </h3>
      <p>{text}</p>
      <div>
        <RiPencilLine style={iconStyle} />
        <RiPaintFill style={iconStyle} />
        <RiCloseLine style={iconStyle} />
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
`;
