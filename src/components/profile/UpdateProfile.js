import React from 'react';

const UpdateProfileForm = (props) => {
  const {updateProfile,
        bio,
        picture,
        fullname,
        nameChange,
        bioChange,
        picChange} = props;

  return (
    <div>
      <form>
        <i class="material-icons" onClick="document.getElementById('file').click()">add_a_photo</i>
        <input id="file" onChange={picChange} value={picture} type="file" name="pic" accept="image/*"/>
        <input onChange={nameChange} value={fullname} name="fullname" type="text"></input>
        <input onChange={bioChange} value={bio} name="bio" type="text"></input>
      </form>
      <button type="submit" onClick={updateProfile}>UPDATE</button>
    </div>
  )
}


export default UpdateProfileForm;