import React, { useState } from "react";

const Search = () => {
    const[item,setitem]= useState("");
    const inputevent =(event) =>{
        const data =event.target.value;
        setitem(data);
    };
    return(
        <>
        <div>
            <input type="text" placeholder="SEARCH" value={item} onChange={inputevent}/>
        </div>
        
        </>
    )
} 
export default Search;