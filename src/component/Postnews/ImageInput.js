import React from "react"

function ImageInput(props){

  function getImageUrl(e){
    props.Value(e.target.value)
  }

    return(
<div class="form-group">
    <label for="exampleFormControlFile1">Select Image</label>
    <input type="file" onChange = {getImageUrl} class="form-control-file" id="exampleFormControlFile1"/>
  </div>
    )
}

export default ImageInput