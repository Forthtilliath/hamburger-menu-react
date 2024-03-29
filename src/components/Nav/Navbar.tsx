import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

type Props = {
  ulContent: string[];
};

const Navbar = ({ ulContent }: Props) => {
  return (
    <Nav>
      <div className="logo">Nav Bar</div>
      <Burger ulContent={ulContent} />
    </Nav>
  );
};

export default Navbar;
