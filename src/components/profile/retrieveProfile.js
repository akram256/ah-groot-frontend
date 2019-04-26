import React from 'react';
import { stringify } from "javascript-stringify";
import Profile from '../../containers/profile/Profile';
import M from 'materialize-css/dist/js/materialize.js';

const RetrieveProfileComponent = (props) => {
    const {
      openmodal,
    full_name, user, bio, followinglist,peepsIbeFollow, timestamp,shouldHiveStuff, isfollowing,hasFollowed,followers, handlefollowers,handlefollow, following, follow, image} = props
  
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
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
      <h6>Active member since {timestamp}</h6>


      <div id="modal2" class="modal">
                <div className="modal-content">
            </div>
                <div class="modal-footer">
                  <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
           
                </div>
              
    
      </div>

      <h6 user ={user}
        className="waves-effect waves-lights  modal-trigger" href="#modal2">{followers} following</h6>

        <br/>
      <div id="modal1" class="modal">
                <div className="modal-content">
            {peepsIbeFollow? peepsIbeFollow.map(profile=>(
              <ul key={profile.user}><button className="btn right" type="button">Follow</button>
                <li>{profile.user}</li>
             
              </ul>
            )):"No followers"

            }    
            </div>
                <div class="modal-footer">
                  <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
           
                </div>
              
    
      </div>
      <h6 user ={user} onClick= {(event)=>{
        const user = event.currentTarget.getAttribute('user'); 
        //  handlefollowers(user)

      }
        
        } className="waves-effect waves-light  modal-trigger" href="#modal1">{following} followers</h6>


      <div> {!shouldHiveStuff?(<button onClick={openmodal} className="btn right" type="button">Edit Profile</button>):null}</div>
      <div>{shouldHiveStuff?(<button user={user} onClick={(event) => {
                    const user = event.currentTarget.getAttribute('user');
                    handlefollow(user, hasFollowed);
      }} className="btn left" type="button">
    {hasFollowed?"UnFollow":"Follow"}
       </button>):null}</div>
      <div className="clearfix"></div>
        </div>
  )
}

export default RetrieveProfileComponent