import React from "react"

function FullNews(props){

  function getFullNews(e){
props.Value(e.target.value)
  }

    return(
<div class="form-group">
    <label for="exampleFormControlTextarea1">Full News</label>
    <textarea class="form-control" onChange = {getFullNews} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
    )
}

export default FullNews