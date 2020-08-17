import React from "react"

function HeadLine(props){

function getValue(e){
  props.Value(e.target.value)
}

    return(
        <div class="form-group">
    <label for="exampleFormControlInput1">HeadLine</label>
    <input class="form-control" onChange={getValue} id="exampleFormControlInput1"/>
  </div>
    )
}

export default HeadLine