import React from "react";
import { BsFillCalendarCheckFill, BsTrashFill } from "react-icons/bs";
import './TodoIcon.css'

const iconTypes = {
    "check": color => (
        <BsFillCalendarCheckFill className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <BsTrashFill className="Icon-svg Icon-svg--delete" fill={color}/>
    ),
};

function TodoIcon({ type, color = 'white', onClick } ) {
    return(
        <span 
          className={`Icon-container Icon-container--${type}`}
          onClick={onClick}
        >
          {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };