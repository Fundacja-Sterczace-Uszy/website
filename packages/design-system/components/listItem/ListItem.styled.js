import styled from "@emotion/styled"
import theme from "design-system/theme"

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  background-color: "transparent";
  color: ${({ variant }) =>
    variant === "primary" ? theme.colors.primary[500] : theme.colors.grey[600]};
  ${theme.typography.desktop.bodySmall};
`
export const ChildContainer = styled.div`
  display: flex;
  color: inherit;
  flex-grow: 0;
  line-height: 30px;
`
export const ListItemIcon = styled.div`
  display: flex;
  flex-grow: 0;
  align-items: center;
  justify-content: center;
  color: inherit;
`
