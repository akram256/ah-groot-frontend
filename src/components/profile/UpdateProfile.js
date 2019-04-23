import React from 'react';

const UpdateProfileForm = (props) => {
  const {updateProfile,
        bio,
        picture,
        fullname,
        nameChange,
        progress,
        bioChange,
        picChange} = props;
  return (
    <div>
      <progress value={progress} max={100}></progress>
      <form>
        <div className="btn file-field">
        <span>UPLOAD</span>
        <input id="file" onChange={picChange} value={picture} className="file-field input-field" type="file" name="pic" accept="image/*"/> 
        </div> 
        <div className="row">
        <div class="input-field col s12">
          <input onChange={nameChange} value={fullname} id="first_name" type="text" className="validate"/>
          <label for="first_name">Full Name</label>
        </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input onChange={bioChange} value={bio} id="bio" type="text" className="validate" />
            <label htmlFor="bio">Bio</label>
          </div>
        </div></form>
      <button type="submit" className="btn right" onClick={updateProfile}>UPDATE</button>
    </div> 
  )
}

export default UpdateProfileForm;
