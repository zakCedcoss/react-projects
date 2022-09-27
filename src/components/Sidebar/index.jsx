import { useState } from "react";

function Sidebar() {

    const tabs = ["Home","Docs","Examples","About","Contact Us"]
    const [isOpen,setIsOpen] = useState(true)
    return (
        <div className="sidebar">
            {isOpen ? <span style={{
                fontSize: "1.5rem",
                cursor:"pointer"
            }} on onClick={() => setIsOpen(!isOpen)}>☰</span> :
            <span style={{
                fontSize: "1.5rem",
                cursor:"pointer"
            }} on onClick={() => setIsOpen(!isOpen)}>✖</span>}
            <div className={isOpen ? "sidebar-tabs move": "sidebar-tabs"}>
                <h1>Logo</h1>
                <ul className="tabs">
                    {tabs.map((tab,i) => {
                        return <li>{tab}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;