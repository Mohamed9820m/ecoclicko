import React, { useEffect, useState } from 'react';
import image from '../../assets/images/nissaf.png'
import Cookies from 'js-cookie'; 
import jwt_decode from 'jwt-decode';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './Profile.css'
function Profile() {


    const [user, setUser] = useState({
      name: '',
      image: '',
      bio: '',
      email: '',
    });

    const [id,setID] =useState('')


  
    useEffect(() => {
      const token = Cookies.get('token');
  
      if (token) {
        const decodedToken = jwt_decode(token);
        const userId = decodedToken.userId;
        setID(userId)
        console.log(userId)
  
        axios
          .get(`http://127.0.0.1:5000/api/Users/oneUser/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            const userData = response.data;
            setUser({
              name: userData.userName ,
              image: userData.image ,
              bio: userData.userAboutMe ,
              email: userData.userEmail ,
            });
          })
          .catch((error) => {
            console.error('Error fetching user data:', error);
          });
      }
    }, []);



    const handleIconClick = () => {
        Swal.fire({
          title: 'Update your name',
          input: 'text',
          inputLabel: 'New Name',
          inputPlaceholder: 'Enter your new name',
          showCancelButton: true,
          confirmButtonText: 'Update',
          preConfirm: (newName) => {
            if (newName) {
                console.log('userId',id)
              const apiUrl = `http://127.0.0.1:5000/api/Users/users/${id}/update-username`;
      
              axios
                .put(apiUrl, { newUsername: newName })
                .then((response) => {
                  if (response.status === 200) {
                    Swal.fire('Updated!', 'Your username has been updated.', 'success');
                    setUser({ ...user, name: newName });
                  } else {
                    Swal.fire('Error', 'Failed to update your username.', 'error');
                  }
                })
                .catch((error) => {
                  console.error('API request error:', error);
                  Swal.fire('Error', 'Failed to update your username.', 'error');
                });
            } else {
              Swal.showValidationMessage('Please enter a new name');
            }
          },
        });
      };


      const handleIconClick1 = () => {
        Swal.fire({
          title: 'Update your password',
          html: `
            <input type="password" id="swal-input1" class="swal2-input" placeholder="New Password">
            <input type="password" id="swal-input2" class="swal2-input" placeholder="Confirm New Password">
          `,
          showCancelButton: true,
          confirmButtonText: 'Update',
          preConfirm: () => {
            const newPassword = document.getElementById('swal-input1').value;
            const confirmPassword = document.getElementById('swal-input2').value;
      
            if (newPassword && confirmPassword) {
              if (newPassword === confirmPassword) {
                const apiUrl = `http://127.0.0.1:5000/api/Users/users/${id}/update-password`;
      
                axios
                  .put(apiUrl, { newPassword: newPassword })
                  .then((response) => {
                    if (response.status === 200) {
                      Swal.fire('Updated!', 'Your password has been updated.', 'success');
                    } else {
                      Swal.fire('Error', 'Failed to update your password.', 'error');
                    }
                  })
                  .catch((error) => {
                    console.error('API request error:', error);
                    Swal.fire('Error', 'Failed to update your password.', 'error');
                  });
              } else {
                Swal.showValidationMessage('Passwords do not match. Please try again.');
              }
            } else {
              Swal.showValidationMessage('Please enter both a new password and confirmation.');
            }
          },
        });
      };
      
   
        const handleIconClick2 = () => {
          Swal.fire({
            title: 'Update your bio',
            input: 'textarea',
            inputLabel: 'New Bio',
            inputPlaceholder: 'Enter your new bio',
            showCancelButton: true,
            confirmButtonText: 'Update',
            preConfirm: (newBio) => {
              if (newBio) {
                const apiUrl = `http://127.0.0.1:5000/api/Users/users/${id}/update-bio`;
      
                axios
                  .put(apiUrl, { newBio: newBio })
                  .then((response) => {
                    if (response.status === 200) {
                      Swal.fire('Updated!', 'Your bio has been updated.', 'success');
                      setUser({ ...user, bio: newBio });

                    } else {
                      Swal.fire('Error', 'Failed to update your bio.', 'error');
                    }
                  })
                  .catch((error) => {
                    console.error('API request error:', error);
                    Swal.fire('Error', 'Failed to update your bio.', 'error');
                  });
              } else {
                Swal.showValidationMessage('Please enter a new bio');
              }
            },
          });
        };




        const handleImageUpdate = (newImage) => {
            if (newImage) {
              const formData = new FormData();
              formData.append('file', newImage);
              formData.append('upload_preset', 'mohamedha'); 
        
              axios
                .post('https://api.cloudinary.com/v1_1/djl7btyt5/image/upload', formData)
                .then((response) => {
                  const newImageUrl = response.data.secure_url;
        
                  const apiUrl = `http://127.0.0.1:5000/api/Users/users/${id}/update-image`;
        
                  axios
                    .put(apiUrl, { newImage: newImageUrl })
                    .then((userUpdateResponse) => {
                      if (userUpdateResponse.status === 200) {
                        Swal.fire('Updated!', 'Your image has been updated.', 'success');
                        setUser({ ...user, image: newImageUrl });
                      } else {
                        Swal.fire('Error', 'Failed to update your image.', 'error');
                      }
                    })
                    .catch((error) => {
                      console.error('API request error:', error);
                      Swal.fire('Error', 'Failed to update your image.', 'error');
                    });
                })
                .catch((error) => {
                  console.error('Image upload error:', error);
                  Swal.fire('Error', 'Failed to upload the image.', 'error');
                });
            } else {
              Swal.showValidationMessage('Please select a new image');
            }
          };
        
          const handleImageIconClick = () => {
            Swal.fire({
              title: 'Update your image',
              input: 'file',
              showCancelButton: true,
              confirmButtonText: 'Update',
              preConfirm: (newImage) => {
                handleImageUpdate(newImage);
              },
            });
          };

              const navigates = useNavigate();


          const handleDeleteUser = (navigates) => {
            Swal.fire({
              title: 'Are you sure?',
              text: 'You will not be able to recover your account after deletion!',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, delete my account',
              cancelButtonText: 'No, cancel',
              confirmButtonColor: '#d33',
              cancelButtonColor: '#3085d6',
            }).then((result) => {
              if (result.isConfirmed) {
                const apiUrl = `http://127.0.0.1:5000/api/Users/users/${id}/delete`;
                axios
                  .delete(apiUrl)
                  .then((response) => {
                    if (response.status === 200) {
                      Swal.fire('Deleted!', 'Your account has been deleted.', 'success').then(() => {
                        Cookies.remove('token'); 
                        navigates('/login');
                      });
                    } else {
                      Swal.fire('Error', 'Failed to delete your account.', 'error');
                    }
                  })
                  .catch((error) => {
                    console.error('API request error:', error);
                    Swal.fire('Error', 'Failed to delete your account.', 'error');
                  });
              }
            });
          };
          

  return (
    <div className="modal-body py-0">
      {/* Header */}
      <div className="profile modal-gx-n">
        
        <div className="profile-img text-primary rounded-top-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 50 400 140.74">
  <defs>
  </defs>
  <g>
    <g>
      <path d="M400,125A1278.49,1278.49,0,0,1,0,125V0H400Z"></path>
      <path class="cls-2" d="M361.13,128c.07.83.15,1.65.27,2.46h0Q380.73,128,400,125V87l-1,0a38,38,0,0,0-38,38c0,.86,0,1.71.09,2.55C361.11,127.72,361.12,127.88,361.13,128Z"></path>
      <path class="cls-2" d="M12.14,119.53c.07.79.15,1.57.26,2.34v0c.13.84.28,1.66.46,2.48l.07.30c.18.80.39,1.59.62,2.37h0q33.09,4.88,66.36,8,.58-1,1.09-2l.09-.18a36.35,36.35,0,0,0,1.81-4.24l.08-.24q.33-.94.60-1.90l.12-.41a36.26,36.26,0,0,0,.91-4.42c0-.19,0-.37.07-.56q.11-.86.18-1.73c0-.21,0-.42,0-.63,0-.75.08-1.51.08-2.28a36.5,36.5,0,0,0-73,0c0,.83,0,1.64.09,2.45C12.10,119.15,12.12,119.34,12.14,119.53Z"></path>
      <circle class="cls-2" cx="94.5" cy="57.5" r="22.5"></circle>
      <path class="cls-2" d="M276,0a43,43,0,0,0,43,43A43,43,0,0,0,362,0Z"></path>
    </g>
  </g>
</svg>
        </div>

        <div className="profile-body ">
        <div className="d-flex flex-column align-items-center text-center">
          <div className="avatar avatar-xl mb-3">
            <img className="avatar-img avatar-img-circle" src={user.image} alt="#" />

            <div className="col-auto">
              <div className="btn btn-sm btn-icon btn-dark param " onClick={handleImageIconClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>
            </div>

          </div>

          <h4 className="mb-4">{user.name}</h4>
          <p>{user.bio}</p>
        </div>
      </div>


      </div>


      {/* Header */}
      
      <hr className="hr-bold modal-gx-n my-0" />

      {/* List */}
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="row align-items-center gx-6">
            <div className="col">
              <h5>My full Name</h5>
              <p>{user.name}</p>
            </div>

            <div className="col-auto">
              <div className="btn btn-sm btn-icon btn-dark "onClick={handleIconClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>
            </div>

          </div>
        </li>

        <li className="list-group-item">
          <div className="row align-items-center gx-6">
            <div className="col">
              <h5>E-mail</h5>
              <p>{user.email}</p>
            </div>

             {/* <div className="col-auto">
              <div className="btn btn-sm btn-icon btn-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>
            </div> */}


          </div>
        </li>

        <li className="list-group-item">
          <div className="row align-items-center gx-6">
            <div className="col">
              <h5>Passworld</h5>
              <p>****************</p>
            </div>

            <div className="col-auto">
              <div className="btn btn-sm btn-icon btn-dark" onClick={handleIconClick1}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>
            </div>
            
          </div>
        </li>
      </ul>
      {/* List  */}
      
      <hr className="hr-bold modal-gx-n my-0" />

      {/* List */}
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="row align-items-center gx-6">
            <div className="col">
              <h5>My bio</h5>
              <p>{user.bio}</p>
            </div>

            <div className="col-auto">
              <div className="btn btn-sm btn-icon btn-dark " onClick={handleIconClick2}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>
            </div>
          </div>
        </li>
      </ul>
      {/* List  */}
      
      <hr className="hr-bold modal-gx-n my-0" />

      {/* List */}
      {/* <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <a href="#" className="text-danger" onClick={handleDeleteUser}>Delete My Account !</a>
        </li>
      </ul> */}
      {/* List */}
    </div>
  );
}

export default Profile;
