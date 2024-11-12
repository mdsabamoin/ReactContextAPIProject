
import "./modal.css"
import React, { useContext, useState } from "react";
import { Context } from "../store/contextProvider";
import axios from "axios";
const Modal = (props) => {



  const ctx = useContext(Context);

  const titleHandler = (event) => {
    ctx.setTitle(event.target.value);
  }
  const UrlHandler = (event) => {
    ctx.setUrl(event.target.value);
  }

  const FormHandler = (event) => {
    //  console.log("FormHandled");

    event.preventDefault();
    if (!ctx.Edit) {
      const obj = { "title": ctx.title, "url": ctx.url };
      axios.post("https://crudcrud.com/api/2aea4221b46c442d8056cf2d375466e1/todo", obj)
        .then((res) => ctx.setTitleUrl(previousState => [...previousState, res.data]))
        .catch((err) => console.log(err));
      ctx.setDisplay(false);
      console.log(ctx.TitleUrl);
      ctx.setTitle("");
      ctx.setUrl("");
    }else if(ctx.Edit){
      const obj = {"title": ctx.title, "url": ctx.url };
      axios.put(`https://crudcrud.com/api/2aea4221b46c442d8056cf2d375466e1/todo/${ctx.id}`, obj)
        .then((res) => console.log("updated",res))
        .catch((err) => console.log("cant update",err));
        const arr = [...ctx.TitleUrl];
        arr[ctx.index] = {"_id":ctx.id,"title": ctx.title, "url": ctx.url };
        ctx.setTitleUrl(arr);
      ctx.setEdit(false);
      ctx.setTitle("");
      ctx.setUrl("");
    }


  }
  return (<form className="modal" onSubmit={FormHandler}>
    <div className="modal-content">
      <div>
        <label htmlFor="title">Title:  </label>
        <input id="title" type="text" value={ctx.title} onChange={titleHandler} />
      </div>
      <div>
        <label htmlFor="url">URL: </label>
        <input id="url" type="url" value={ctx.url} onChange={UrlHandler} />
      </div>
      <button type="submit">{ctx.Edit ? "UPDATE" : "SUBMIT"}</button>
    </div>
  </form>)
}

export default Modal;