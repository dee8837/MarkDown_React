import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';

const Markdownreact =() =>{
    const [markDown,setMarkDown,] =useState(`![king](https://images.moneycontrol.com/static-mcnews/2022/10/Collage-Maker-23-Oct-2022-06.50-PM-770x435.jpg?impolicy=website&width=770&height=431) 
     # heading 1` )
    return(
        <>
        <div className="center-div">
            <textarea className="left-side"   value={markDown} 
            onChange={(e) => setMarkDown(e.target.value)} ></textarea>

            <div className="right-side">
                <ReactMarkdown >{markDown}</ReactMarkdown></div>

        </div>
        

    
        
        
        </>
    )
};
export default  Markdownreact; 