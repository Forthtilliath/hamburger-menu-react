import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 20px;

    &:hover {
      background-color: #36668c;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: all 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open, ulContent }) => {
  return (
    <Ul open={open}>
      {ulContent.map((li, key) => (
        <li key={key}>{li}</li>
      ))}
    </Ul>
  );
};

export default RightNav;
