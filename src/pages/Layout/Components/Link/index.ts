import styled from "styled-components";
import { Link as RouterLink } from "react-router";
import { Colors } from "../../../../styles/tokens/colors";

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${Colors["Green-70"]};
  width: 100%;
`;
