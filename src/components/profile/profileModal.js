import React from 'react';
import Modal from 'react-responsive-modal';

import 'materialize-css/dist/css/materialize.min.css';

import UpdateProfileForm from './UpdateProfile';

const UpdateProfileModal = (props) => {
     const {open,
            close,
            updateProfile,
            picture,
            bio,
            fullname,
            nameChange,
            bioChange,
            picChange} = props;
            
  return (
    <div className="modal ">
        <Modal open={open} onClose={close}>
            <div>
             <h5>Welcome Back!</h5>
            </div>
            <div>
                <UpdateProfileForm
                updateProfile = {updateProfile}
                bio={bio}
                picture={picture}
                fullname={fullname}
                nameChange={nameChange}
                bioChange={bioChange}
                picChange={picChange}
                />
            </div>
        </Modal>
  </div>
  )
}

export default UpdateProfileModal;