import React from "react";
import classNames from "classnames";
const Classnames2 = ({ isPrimary, isDisabled, children }) => {
  const buttonClass = classNames({
    btn: true, // Always apply 'btn' class
    "btn-primary": isPrimary, // Apply 'btn-primary' class if isPrimary is true
    "btn-disabled": isDisabled, // Apply 'btn-disabled' class if isDisabled is true
  });
  return (
    <div>
      <button
        className={classNames({
          btn: true,
          "btn-primary": false,
        })}
      >
        custome
      </button>

      <button className={buttonClass} disabled={isDisabled}>
        {children}
      </button>
    </div>
  );
};

export default Classnames2;
