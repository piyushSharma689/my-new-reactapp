import { useState } from "react";

export default function Counter() {
    let [count, setcount] = useState(0);
    let [btncol, setbtncol]= useState({backgroundColor: "purple"})

   
    
    const inc = () => {
         setcount(count+1);
        btncol.backgroundColor =="yellow" ?setbtncol({backgroundColor: "red"}): setbtncol({backgroundColor:"yellow"})
    }
    
    return (<>
        <button onClick={inc}  className=" border-2 p-3 px-10 m-20 border-indigo-600 rounded-xl shadow-lg" style={btncol}>click {count}</button>


    </>);

}

 export function Rating() {
    let [islike, setislike] = useState(false);

    let likestyle= {color:"yellow"}

    let likehandle = () => {
        setislike(!islike);
    }
    return (<h1 onClick={likehandle}>{islike ? <i class="fa-solid fa-star" style={likestyle}></i> : <i class="fa-regular fa-star" ></i>}</h1>);
}