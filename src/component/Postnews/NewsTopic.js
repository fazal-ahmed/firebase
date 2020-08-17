import React from "react"

function NewsTopic(props){

function getTopic(e){
props.Value(e.target.value)
}

    return(
      <div class="form-group">
      <label for="exampleFormControlSelect1">Select Topic</label>
      <select class="form-control" onChange = {getTopic} id="exampleFormControlSelect1">
        <option>COVID-19</option>
        <option>BUSINESS</option>
        <option>TECH</option>
        <option>MOVIES</option>
        <option>HEALTH</option>
        <option>LIFESTYLE</option>
        <option>SPORTS</option>
        <option>POLITICS</option>
        <option>ARTS</option>
      </select>
    </div>
    )
}

export default NewsTopic