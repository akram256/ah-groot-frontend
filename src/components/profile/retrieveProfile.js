import React from 'react';
import { stringify } from "javascript-stringify";

const RetrieveProfileComponent = (props) => {
    const {
      openmodal,
    full_name, user, bio, timestamp, followers, following, image} = props
      
    
  return (
        <div className="card-panel grey lighten-5 z-depth-1">
          <div >
            <div >
              <img className="circle responsive-img" src={image}/>
            </div>
          </div>
          <h2>{full_name}</h2>
          <h6>@{user}</h6>
      <span>
          <h6>Bio:<span className="text-sm">{bio}</span></h6>
         
      </span>
      <h6>Active member since {stringify(timestamp).slice(1, 11)}</h6>
      <h6>{followers} Followers</h6>
      <h6>{following} Following</h6>
      <div><button onClick={openmodal} className="btn right" type="button">Edit Profile</button></div>
      <div className="clearfix"></div>
        </div>
  )
}

export default RetrieveProfileComponent