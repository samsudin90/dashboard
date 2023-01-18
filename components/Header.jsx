import React from "react";

const Header = ({title}) => {
    return(
        <div className="flex justify-between px-4 pt-4">
            <h2>{title}</h2>
            <h2>Welcome back, <span className="text-blue-500 capitalize hover:cursor-pointer">ilyas</span></h2>
        </div>
    )
}

export default Header