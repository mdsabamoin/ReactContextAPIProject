import React, { useContext, useEffect } from "react";
import { Context } from "../store/contextProvider";
import axios from "axios";
const BookMark = () => {

    const ctx = useContext(Context);
     console.log(ctx.TitleUrl);
    
    const DeleteHandler = (id,index)=>{
            
                const arr = [...ctx.TitleUrl];
                  arr.splice(index,1);
                ctx.setTitleUrl(arr);
            // ctx.setId(id);
            // ctx.setIndex(index);
                
            const l=`https://crudcrud.com/api/e882953919ac42a2a7add7c4a0af151d/todo/${id}`
            console.log(l);
            axios.delete(l)
            .then((res)=>console.log("DeletedItem",res))
            .catch((err)=>console.log("cantDelete",err));
        
    }
    const EditHandler = (id,index,title,url)=>{
        ctx.setEdit(true);
        ctx.setTitle(title); 
        ctx.setUrl(url);
        ctx.setId(id);
        ctx.setIndex(index);

    }

    return (<div>
        <h3>All BookMarks</h3>
        {ctx.TitleUrl.length > 0 && ctx.TitleUrl.map((item , index) => {
            return (<li key={index}>

                {item.title}<span>-----</span><a href={item.url}>{item.url}</a>
                <button type="button" onClick={()=>EditHandler(item._id,index,item.title,item.url)}>Edit</button>
                <button type="button" onClick={()=>DeleteHandler(item._id,index)}>Delete</button>
            </li>)
        })}
    </div>)
}

export default BookMark;