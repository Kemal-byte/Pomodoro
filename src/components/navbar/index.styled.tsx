import styled from "styled-components";
import Colors from "../../utilities/commonCss/colors";
// interface ContainerMainProps {
//   bgColor: string;
//   mainColor: string;
// }

const Navbar = styled.nav`
  /* ... */
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
export const NavItems = styled.button`
  width: 130px;
  height: 45px;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  color: ${Colors.primaryYellow};
  line-height: 45px;
  background-color: ${Colors.primaryYellow};
  cursor: pointer;
  border: none;
  &:hover {
    outline: 1px solid #fff;
  }
`;

export default Navbar;
