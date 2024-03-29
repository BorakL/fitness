import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import textFormating from "../../utilies";
import "./filter.css";

const Filter = ({ query, filter, filterGroup, changeFilter, loading})=>{

    const isChecked = query && query[filterGroup] && query[filterGroup].split("+").find(f=>f===filter._id)  
    return( 
        <div className="filterItem" onClick={()=>!loading ? changeFilter(filter,filterGroup) : null}> 
            <div className="filterName">
                <div className={`checkBox ${isChecked ? "checked" : ""}`}></div> 
                {textFormating(filter._id)}
            </div> 
            <div className="filterCount">{filter.count}</div> 
        </div>   
    )
}

export default Filter;