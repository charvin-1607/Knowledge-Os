import React, { useEffect,useState  } from 'react'
import { useSelector,useDispatch } from 'react-redux'


import {fetchUserAPI ,updateUserAPI, deleteUserAPI } from '../../Services/userFunctions'


import {

    fetchUserRequestStart,
    fetchUserRequestSuccess,
    fetchUserRequestFail,

   updateUserRequestStart,
    updateUserRequestSuccess,
    updateUserRequestFail,

    deleteUserRequestStart,
    deleteUserRequestSuccess,
    deleteUserRequestFail,
} from '../../redux/user/userSlice'





import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const dispatch = useDispatch();
    const {userData,updateUserRequest, deleteUserRequest } = useSelector((state) => state.user);
    const { checkAuthRequest,user} = useSelector((state) => state.auth);


    const navigate = useNavigate();

     // update state
     const [editUser, setEditUser] = useState(false);

     const [formData, setFormData] = useState({
         name: "",
         email: "",
     });

     const updateData = {};

     if (formData.name.trim() !== "") {
         updateData.name = formData.name;
     }
     
     if (formData.email.trim() !== "") {
         updateData.email = formData.email;
     }


     useEffect(() => {

        fetchUserDetails();
     },[]);

     const fetchUserDetails = async () => {

      dispatch(fetchUserRequestStart());

      try {

          const res = await fetchUserAPI();

          if (!res || res.error) {
              dispatch(fetchUserRequestFail(res.message || "Authentication check failed"));
              return;
          }

          dispatch(fetchUserRequestSuccess(res));

      } catch (error) {
          dispatch(fetchUserRequestFail(error.message || "Something went wrong during authentication check"));
      }
  }


      // update task handle change

      const handleChange = (e) => {
          
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }

    // update user function

    const handleUpdateUser = async (e) => {
        
          e.preventDefault();
  
          dispatch(updateUserRequestStart());
  
          try {
  
              const res = await updateUserAPI(userData._id,updateData);
  
              if (!res || res.error) {
                  dispatch(updateUserRequestFail(res.message || "Update user failed"));
                  return;
              }
  
              dispatch(updateUserRequestSuccess(res));

              
  
          } catch (error) {
              dispatch(updateUserRequestFail(error.message || "Something went wrong during update user"));
          }
  
      }

  
    //delete function

    const handleDeleteUser = async () => {
        
          dispatch(deleteUserRequestStart());
  
          try {
  
              const res = await deleteUserAPI(userData.id);
  
              if (!res || res.error) {
                  dispatch(deleteUserRequestFail(res.message || "Delete user failed"));
                  return;
              }
  
              dispatch(deleteUserRequestSuccess(res));
              
              // navigate user on signup page after delete user
              navigate("/signup");

  
          } catch (error) {
              dispatch(deleteUserRequestFail(error.message || "Something went wrong during delete user"));
          }
  
      }
     


    return (

      <>
      
      <div className="container mt-5">
      

          <div className="row justify-content-center">

              <div className="col-md-6">

                  <div className="card shadow">

                      <div className="card-body">

                          <h3 className="card-title text-center mb-4">
                              My Profile
                          </h3>


                          {userData && (

                              <>

                                  <div className="mb-3">

                                      <strong>Name:</strong>

                                      <p className="mb-0">
                                         {userData?.name }
                                          
                                      </p>

                                  </div>


                                  <div className="mb-3">

                                      <strong>Email:</strong>

                                      <p className="mb-0">
                                          {userData?.email}
                                      </p>

                                  </div>


                              </>

                          )}

                            {/* update button */}

                          <div className="d-flex justify-content-between">

                              <button
                                  className="btn btn-primary"
                                  onClick={() => {

                                    setEditUser(userData);
                                
                                    setFormData({
                                        name: userData?.name || "",
                                        email: userData?.email || ""
                                    });
                                
                                }}
                                  
                              >
                                  Edit Profile
                              </button>

                              <button
                                  className="btn btn-danger"
                                  onClick={handleDeleteUser}
                              >

                                  Delete Profile

                              </button>

                          </div>

                      </div>

                  </div>

                  
                  {
                    editUser && ( 
                        
                        <div className="card shadow mt-4">
  
                            <div className="card-body">
  
                                <h3 className="card-title text-center mb-4">
                                    Edit Profile
                                </h3>
  
                                <form onSubmit={handleUpdateUser}>
  
                                    <div className="mb-3">
  
                                        <label  className="form-label">
                                            Name
                                        </label>
  
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                             placeholder={editUser.name}
                                        />
  
                                    </div>
  
                                    <div className="mb-3">
  
                                        <label  className="form-label">
                                            Email
                                        </label>
  
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
  
                                    </div>
  
                                    <button type="submit" className="btn btn-success">
                                        Update Profile
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-secondary ms-2"
                                        onClick={() => setEditUser(null)}
                                    >
                                        Cancel
                                    </button>

  
                                </form>


  
                            </div>
  
                        </div>
                        
                      
                      
                      
                      )}

                  

              </div>

          </div>

      </div>

      </>
  
);



}

export default Profile
