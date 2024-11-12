
import React , {useContext,Fragment, useEffect} from "react";
import './App.css';
import Portal from "./components/Portal";
// import {ContextProvider} from './store/contextProvider';
import { Context } from './store/contextProvider';
import BookMark from "./components/BookMark";
import axios from "axios";
function App() {

     const ctx = useContext(Context);
     useEffect(()=>{
      axios.get("https://crudcrud.com/api/2aea4221b46c442d8056cf2d375466e1/todo")
      .then((res)=>ctx.setTitleUrl(res.data))
      .catch((err)=>console.log("data did not get",err));
     },[])
  
  
  console.log(ctx.display);
  return (
    <Fragment>
    <div className="App">
      {ctx.display?<Portal/>:null}
      {ctx.Edit?<Portal/>:null}
      {ctx.display?null:<h2>BookMark Website</h2>}
      {ctx.display?null:<button type="button" onClick={()=>ctx.setDisplay(true)}>Add New</button>}
    </div>
    {!ctx.display && ctx.TitleUrl.length > 0 && <BookMark/>}
    </Fragment>
  );
}

export default App;
