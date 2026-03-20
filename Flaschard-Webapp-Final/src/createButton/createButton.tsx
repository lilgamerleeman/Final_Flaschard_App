import { Folder } from 'lucide-react';
import React from "react";
import Deck from "../svg/deck-stack-2.svg?react";
import Paper from "../svg/paper-sheet-3.svg?react";
import "./createButton.css";



// <Folder />
type createButtonProps = {
    onClick?:()=>void;
    onMenuItemClick?: (item: string) => void;
};

const CreateButton:React.FC<createButtonProps> = ({
    onClick,
    onMenuItemClick
})=>{
return (
    <div className="Create-Button-Container">
        <div className="Create-Button-Menu">
            <div className="Menu-Item" onClick={() => onMenuItemClick?.("option1")}><Paper className="menu-icon" /><span>Create Card</span></div> 
            <div className="Menu-Item" onClick={() => onMenuItemClick?.("option2")}><Deck className="menu-icon" /><span>Create Deck</span></div>
            <div className="Menu-Item" onClick={() => onMenuItemClick?.("option4")}><Folder className="menu-icon" /><span>Create Folder</span></div>
            <div className="Menu-Item" onClick={() => onMenuItemClick?.("option4")}><span>Import</span></div>
        </div>
        <button className="Create-Button" onClick={onClick}>
            +
        </button>
        
    </div>
    )
}
export default CreateButton;