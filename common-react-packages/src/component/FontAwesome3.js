import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser } from "@fortawesome/free-solid-svg-icons"; // Import specific icons

const FontAwesome3 = () => {
  return (
    <div>
      <p>
        <FontAwesomeIcon icon={faCoffee} /> Enjoy your coffee!
      </p>
      <p>
        <FontAwesomeIcon icon={faUser} /> User Profile
      </p>
    </div>
  );
};

export default FontAwesome3;
