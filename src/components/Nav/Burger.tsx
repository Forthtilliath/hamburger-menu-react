import { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled(
  ({ open, ...props }: StyledProps<"div", { open: boolean }>) => (
    <div {...props} />
  )
)`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

type Props = {
  ulContent: string[];
};

const Burger = ({ ulContent }: Props) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  
  return (
    <>
      <StyledBurger open={open} onClick={toggleOpen}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} ulContent={ulContent} setOpen={toggleOpen} />
    </>
  );
};

export default Burger;
