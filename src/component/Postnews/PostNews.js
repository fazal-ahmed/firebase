import React, { useState, useEffect } from 'react';
import HeadLine from "./HeadLine"
import NewsTopic from "./NewsTopic"
import ImageInput from "./ImageInput"
import FullNews from "./FullNews"
import { NavLink, useHistory } from 'react-router-dom';
import firebase from "./firebase"

function ShowDb() {
  const [data, setData] = useState([])

  useEffect(() => {
    firebase.firestore().collection("user").onSnapshot((snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setData(newData)
    })
  }, [])
  return data
}

function PostNews(props) {
  const data = ShowDb()
  let history = useHistory()
  const [heading, setHeading] = useState("");
  const [fullnews, setFullNews] = useState("");
  const [newstopic, setNewsTopic] = useState("");
  const [image, setImage] = useState("");


  const [myid, setId] = useState("");



  const [reheading, setReHeading] = useState("heading");
  const [refullnews, setReFullNews] = useState("fullnews");
  const [renewstopic, setReNewsTopic] = useState("newstopic");
  const [reimage, setReImage] = useState("newsimg");


console.log(reheading)
console.log(renewstopic)
console.log(refullnews)
console.log(reimage)


  function submited(e) {
    e.preventDefault()
    firebase.firestore().collection("user").add({
      heading: heading,
      newstopic: newstopic,
      fullnews: fullnews,
      image: image
    })
  }
  function editted(e,id){
e.preventDefault()
console.log(id)
setId(id)
}

function Resubmitted(e){
  e.preventDefault()
console.log(myid)
console.log(reheading)
console.log(renewstopic)
console.log(refullnews)
console.log(reimage)
firebase.firestore().collection("user").doc(myid).update({
  heading: reheading,
  newstopic: renewstopic,
  fullnews: refullnews,
  image: reimage

  })
}

  console.log(heading)
  console.log(newstopic)
  console.log(fullnews)
  console.log(image)

  console.log(data)
  return (
    <React.Fragment>
      <form className="left">
        <h1 className="center">POST NEWS</h1>
        <HeadLine Value={setHeading} />
        <FullNews Value={setFullNews} />
        <NewsTopic Value={setNewsTopic} />
        <ImageInput Value={setImage} />
        <button onClick={submited} class="btn btn-primary">Submit</button>
      </form><br/><br/><br/>

      {data.map((datas) =>
        <div className="container">
        <div className="row">
        <div className="col-5">
        
          <h6>{datas.heading}</h6>
          <h6>{datas.fullnews}</h6>
          <h6>{datas.newstopic}</h6>
          <h6>{datas.image}</h6>
        <button onClick={(e) => {editted(e,datas.id)}} class="btn btn-primary">edit</button>
        </div>






        <div className="col-5">
    <label for="exampleFormControlInput1">HeadLine</label>
    <input class="form-control"  onChange={(e)=>{setReHeading(e.target.value)}}  id="exampleFormControlInput1"/>
    <label for="exampleFormControlTextarea1">Full News</label>
    <textarea class="form-control" onChange={(e)=>{setReFullNews(e.target.value)}}  id="exampleFormControlTextarea1" rows="3"></textarea>
      <label for="exampleFormControlSelect1">Select Topic</label>
      <select class="form-control" onChange={(e)=>{setReNewsTopic(e.target.value)}}  id="exampleFormControlSelect1">
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
    <label for="exampleFormControlFile1">Select Image</label>
    <input type="file" onChange={(e)=>{setReImage(e.target.value)}}  class="form-control-file" id="exampleFormControlFile1"/>

    <button onClick={(e) => {Resubmitted(e)}} class="btn btn-primary">resubmitted</button>

          </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      )}
    </React.Fragment>
  )
}
export default PostNews
