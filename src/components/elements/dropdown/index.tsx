"use client"

import { useRef, useState } from "react";
import { CSSTransition } from 'react-transition-group';
import { DropdownProps, DropdownOption } from "./type";

const Dropdown = ({ options }: DropdownProps) => {
  const [isShow, setIsShow] = useState(false)
  const [currentOption, setCurrentOption] = useState(options[0])

  const transitionRef = useRef(null);
  const transitionClasses = {
    enter: "animate__animated",
    enterActive: "animate__fadeIn",
    exit: "animate__animated",
    exitActive: "animate__fadeOut"
  };

  const onClickItem = (option: DropdownOption) => {
    setCurrentOption(option)
    onClickControl()
  }

  const onClickControl = () => {
    setIsShow(!isShow)
  }

  return (
    <div id="generic-dropdown">
      <div className="dropdown-control" onClick={onClickControl}>
        <span>{currentOption.label}</span>
      </div>

      <CSSTransition
        in={isShow}
        nodeRef={transitionRef}
        timeout={200}
        classNames={transitionClasses}
        unmountOnExit
      >
        <ul ref={transitionRef} className="dropdown-panel">
          {options.map((option, key) => (
            <li key={`generic-dropdown-${key}`} onClick={() => onClickItem(option)}>{option.label}</li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  )
}

export default Dropdown