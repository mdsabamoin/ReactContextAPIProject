import React , {useState} from "react";
const Context = React.createContext({
    display: false,
    TitleUrl: [],
    Edit:false,
    title:"",
    url:"",
    index: -1,
    id:"",
    setDisplay: () => { },
    setTitleUrl: () => { },
    setEdit:()=>{},
    setTitle:()=>{},
    setUrl:()=>{},
    setIndex:()=>{},
    setId:()=>{}
});

const ContextProvider = (props) => {
      
    const [display,setDisplay] = useState(false);
    const [TitleUrl,setTitleUrl] = useState([]);
    const [Edit,setEdit] = useState(false);
    const [title , setTitle] = useState("");
    const [url , setUrl] = useState("");
    const [index,setIndex] = useState(-1);
    const [id,setId] = useState("");

     return <Context.Provider value={{
       display,Edit,TitleUrl,title,url,id,index,setTitle,setUrl,setDisplay,setTitleUrl,setEdit,setId,setIndex
    }}>{props.children}</Context.Provider>
}

export  {Context , ContextProvider};