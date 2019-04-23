import React, { Component } from 'react';
import { connect } from 'react-redux';

import retrieveProfileAction from '../../actions/profile/retrieveProfileAction';
import RetrieveProfileComponent from '../../components/profile/retrieveProfile';
import Footer from '../../components/landingPage/Footer';
import Header from '../../components/landingPage/Header';
import UpdateProfileModal from '../../components/profile/profileModal';
import updateProfileAction from '../../actions/profile/updateProfileAction';
import {storage} from '../../firebase/config';
// import '../../styles/profile.scss';

class ProfileContainer extends Component {
    constructor(props, { match }) {
        super(props, { match });
       this.state = {
          open:false,
          image:'',
          bio:'',
          full_name:'',
          isUploading:false,
          progress:0
        };
        this.componentDidMount = this.componentDidMount.bind(this);
      }
    
    componentDidMount() {
        this.props.getProfiles();
      }
  
    close = () => {
      this.setState({ open: false });
    };

    openModal = () => {
      this.setState({ open: true });
    };

    editProfile = (event) => {
      event.preventDefault()


      const body={
        profile:{
          "image":this.state.image,
          "bio":this.state.bio,
          "full_name":this.state.full_name
        }
      }
      this.props.updateProfile(body);

      console.log(body);
      
      location.reload();
    };

    nameChange = event => this.setState({ full_name: event.target.value });
    bioChange = event => this.setState({ bio: event.target.value });
    picChange = (event) => {
      const file=event.target.files[0]
      this.handleUpload(file);
    }

    handleUpload = (image) => {
      this.setState({isUploading:true});
      const uploadTask = storage.ref(`images/${image.name}`)
        .put(image);
      uploadTask.on("state_changed",
        (snapshot) => {
         
          this.setState({ isUploading:true });
          let progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          this.setState({ progress:progress });
          
        },
        (error) => {
        },
        () => {
          // complete function ....
          /* istanbul ignore next */
          storage.ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              this.setState({ image: url });
              this.setState({isUploading:false});
              
            });
        });
    }
  render() {
    const {profile} = this.props
    sessionStorage.setItem('profile', profile.user)
    console.log(profile.followers)
    
    return (
      <div>
      
          <UpdateProfileModal 
            open = {this.state.open}
            close = {this.close}
            updateProfile = {this.editProfile}
            bio={this.state.bio}
            picture={this.state.profilePic}
            fullname={this.state.fullname}
            nameChange={this.nameChange}
            bioChange={this.bioChange}
            picChange={this.picChange}
            isUploading={this.state.isUploading}
            progress={this.state.progress}
          />
          
              <RetrieveProfileComponent 
              profile = {profile}
              full_name = {profile.full_name}
              user = {profile.user}
              openmodal = {this.openModal}
              bio = {profile.bio}
              timestamp = {profile.timestamp}
              followers = {profile.follower_count}
              following = {profile.following_count}
              image = {profile.image || "https://res.cloudinary.com/dx0hz2ziy/image/upload/v1555995619/groot/download.png"}
          />
      
      </div>
    )
  }
}

const mapStateToProps = state => ({
    profile: state.retrieveProfile.profile,
    errors: state.retrieveProfile.errors,
    loading: state.retrieveProfile.loading,
  });

const mapDispatchToProps = dispatch => ({
    getProfiles: () => {
      dispatch(retrieveProfileAction());
    },
    updateProfile: (data) => {
      dispatch(updateProfileAction(data));
    }
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);