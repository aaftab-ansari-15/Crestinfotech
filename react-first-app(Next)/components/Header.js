import React from "react";
import Link from "next/link";
const Header = (props) => {
  return (
    <div className="h-16 bg-green-500 flex items-center justify-between">
      <h2>{props.user}</h2>
      <div className="flex gap-8">
        <div>home</div>
        <div>
          <Link href="/About">About</Link>
        </div>
        <div>contact</div>
        <div>services</div>
      </div>
    </div>
  );
};
export default Header;
