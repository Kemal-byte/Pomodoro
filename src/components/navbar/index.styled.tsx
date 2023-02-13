import styled from "styled-components";
import Colors from "../../utilities/commonCss/colors";

const Navbar = styled.nav`
  /* ... */
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
export const NavItems = styled.div`
  width: 130px;
  height: 45px;
  color: ${Colors.primaryBG};
  line-height: 45px;
  background-color: ${Colors.primaryYellow};
`;

export default Navbar;
