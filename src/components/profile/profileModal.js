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
            picChange,
            isUploading,
            progress,
            image} = props;
            
  return (
    <div className="modal ">
        <Modal open={open} onClose={close}>
            <div>
                <UpdateProfileForm
                updateProfile = {updateProfile}
                bio={bio}
                picture={picture}
                fullname={fullname}
                nameChange={nameChange}
                bioChange={bioChange}
                picChange={picChange}
                isUploading={isUploading}
                progress={progress}
                image={image}
                />
            </div>
        </Modal>
  </div>
  )
}

export default UpdateProfileModal;