import React, { Component } from 'react';
import { connect } from 'react-redux';

import retrieveProfileAction from '../../actions/profile/retrieveProfileAction';
import RetrieveProfileComponent from '../../components/profile/retrieveProfile';
import Footer from '../../components/landingPage/Footer';
import Header from '../../components/landingPage/Header';
import UpdateProfileModal from '../../components/profile/profileModal';
import updateProfileAction from '../../actions/profile/updateProfileAction';
import {storage} from '../../firebase/config';
import '../../styles/profile.scss';

class ProfileContainer extends Component {
    constructor(props, { match }) {
        super(props, { match });
        this.state = {
          open:false,
          image:'',
          bio:'',
          full_name:''
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
      this.props.updateProfile(this.state);
      location.reload();
    };

    nameChange = event => this.setState({ full_name: event.target.value });
    bioChange = event => this.setState({ bio: event.target.value });
    picChange = (event) => {
      const file=event.target.files[0]
      // this.handleUpload(file);
    }

    // handleUpload = (image) => {
    //   const uploadTask = storage.ref(`images/${image.name}`)
    //     .put(image);
    //   uploadTask.on("state_changed",
    //     (snapshot) => {
    //       const isUploading = true;
    //       this.setState({ isUploading });
    //       const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //       this.setState({ progress });
    //     },
    //     (error) => {
    //     },
    //     () => {
    //       // complete function ....
    //       /* istanbul ignore next */
    //       storage.ref("images")
    //         .child(image.name)
    //         .getDownloadURL()
    //         .then((url) => {
    //           console.log(url)
    //           this.setState({ image: url });
    //         });
    //     });
    // }
  render() {
    const {profile} = this.props
    sessionStorage.setItem('profile', profile.user)
    return (
      <div>
      <Header />
      <div className="centre-align">
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
          />
          <div className="card-panel center-align">
              <RetrieveProfileComponent 
              profile = {profile}
              full_name = {profile.full_name}
              user = {profile.user}
              openmodal = {this.openModal}
              bio = {profile.bio}
              timestamp = {profile.timestamp}
              followers = {profile.followers}
              following = {profile.following}
          />
      </div>
      </div>
      <Footer />
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