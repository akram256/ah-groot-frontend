import React from 'react'

const RetrieveProfileComponent = (props) => {
    const {
      openmodal,
    full_name, user, bio, timestamp, followers, following, image} = props
      console.log(followers)
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
          <h5>Bio:<span className="text-sm">{bio}</span></h5>
         
      </span>
      <h6>Active member since {timestamp}</h6>
      <h5>{followers} Followers</h5>
      <h5>{following} Following</h5>
      <div><button onClick={openmodal} className="btn right" type="button">Edit Profile</button></div>
      <div className="clearfix"></div>
        </div>
  )
}

export default RetrieveProfileComponent