import React,{useContext} from "react";
import ReactDOM from "react-dom";
import Modal from "./modal";
import {Context} from "../store/contextProvider";
const Portal = (props) => {
        const ctx = useContext(Context);

    const placeToport = document.getElementById("popup");
    return (
        <div>
            {ctx.display && ReactDOM.createPortal(<Modal/>, placeToport)}
            {ctx.Edit && ReactDOM.createPortal(<Modal/>, placeToport)}
        </div>
    )
}

export default Portal;