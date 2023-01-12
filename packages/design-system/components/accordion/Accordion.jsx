import { string, node, oneOf,  } from "prop-types"
import * as Styled from "./Accordion.styled"
import Icon from "design-system/components/icon"
import React, { useState } from 'react'


const Accordion = ({ children, icon, text, button,
  color, activeColor,  }) =>  {
  const [isActive, setIsActive] = useState(false);
  return (
  <Styled.Accordion
  color={isActive ? activeColor : color}
  activeColor={activeColor}
  >
    <Styled.Title  onClick={() => setIsActive(!isActive)}
    color={isActive ? activeColor : color}
    activeColor={activeColor}
    > {text} 
    <Styled.Icon 
    color={isActive ? activeColor : color}
    activeColor={activeColor}
    >
    <Icon name={icon}/>
    </Styled.Icon> 
    </Styled.Title>
    {isActive &&
    <Styled.Content
    color={isActive ? activeColor : color}
    activeColor={activeColor}
    >
    {children} 
    {button}
    </Styled.Content>
    }
  </Styled.Accordion>
);
}

Accordion.propTypes = {
  text: string,
  children: node,
  icon: string,
  name: string,
  button: node,
  color: oneOf(["primary", "neutrals", "grey", "white", "white with Button", "white with Links" ]),
  activeColor: oneOf(["primary", "neutrals", "grey", "white", "white with Button", "white with Links" ]),
}

Accordion.defaultProps = {
  children: null,
  icon: null,
  name: null,
  button: null,
  color: "grey",
  activeColor: "grey",
}

export default Accordion