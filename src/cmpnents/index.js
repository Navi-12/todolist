import React, { useState,useRef } from "react"
import {connect} from "react-redux";
import {update} from "./store/action"
const List =(props)=>{
    
    const [value,setValue]=useState("");
    const text = useRef(null);
    
    const handleOnChange=(e)=>{
setValue(e.target.value)
    }
    const handleOnClick=()=>{
  text.current.value=""
  let array=[...props.value]
  array.push({text:value,checked:false})
props.update([...array])
    }
    const deleteOnClick=(index)=>{
        let arr=[...props.value]
        arr.splice(index,1)
        props.update([...arr])
        // setArr([...arr])
        // console.log(arr)

    }
    const modifyOnChange=(e,i)=>{
        let arr=[...props.value]
arr[i].checked=e.target.checked
props.update([...arr])
// setArr([...arr])
    }
   
console.log(props.value)
    return(
      <div>
      <center>
        <h1>TodoList</h1>
        <input type="text"  placeholder="enter here" onChange={handleOnChange}  ref={text}/> {''}
        <button onClick={handleOnClick}>ADD</button>
        <ul style={{listStyleType:"none"}}>
            {props.value.map((n,index)=>{
                return(
                    <li  key={index}>
                        <input onChange ={(e)=>modifyOnChange(e,index)} type="checkbox"/>
                    <span style={n.checked===true?{textDecoration:"line-through"}:{}}>{n.text}</span>
                        <span onClick={()=>deleteOnClick(index)}>&#10060;</span>
                    </li>
                )
            })}
            </ul>
        
       </center>
      </div>
    )
  }
  const mapStateToProps=(state)=>{
    return{
        value:state.array
    }
}
   
  export default connect(mapStateToProps,{update})(List);