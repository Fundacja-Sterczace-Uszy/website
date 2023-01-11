import { bool, oneOf, string } from "prop-types"
import Icon from "design-system/components/icon"
import Typography from "design-system/components/typography"
import theme from "design-system/theme"

import * as Styled from "./Input.styled"

const colors = {
  valid: theme.colors.success[100],
  error: theme.colors.error[100],
}

const Input = ({
  label,
  placeholder,
  state,
  message,
  required,
  disabled,
  type,
  name,
  id,
}) => (
  <Styled.Label>
    <Typography variant="bodySmall">{label}</Typography>
    <Styled.Container>
      <Styled.Input
        placeholder={placeholder}
        state={state}
        required={required}
        disabled={disabled}
        type={type}
        name={name}
        id={id}
      />
      {state && (
        <Styled.Icon state={state}>
          <Icon name={state === "valid" ? "success" : "error"} size="medium" />
        </Styled.Icon>
      )}
    </Styled.Container>
    <Typography
      variant="bodyTiny"
      color={state ? colors[state] : theme.colors.grey[500]}
      required={required}
      data-testid="message"
    >
      {required ? "Pole wymagane" : message}
    </Typography>
  </Styled.Label>
)

Input.propTypes = {
  label: string.isRequired,
  placeholder: string,
  state: oneOf(["valid", "error"]),
  message: string,
  required: bool,
  disabled: bool,
  type: oneOf(["text", "number", "email", "tel"]).isRequired,
  name: string,
  id: string,
}

Input.defaultProps = {
  placeholder: "",
  state: null,
  message: "",
  required: false,
  disabled: false,
  name: null,
  id: null,
}

export default Input
