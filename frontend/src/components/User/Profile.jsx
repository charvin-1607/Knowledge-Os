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
              alert("User updated successfully");
              
  
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
    <div className="container py-5">
  
      {/*  PAGE HEADER  */}
  
      <div className="text-center mb-5">
  
        <h1 className="fw-bold mb-2">
          👤 My Profile
        </h1>
  
        <p className="text-muted mb-0">
          View and manage your profile information
        </p>
  
      </div>
  
  
      {/*  PROFILE CARD  */}
  
      <div className="row justify-content-center">
  
        <div className="col-12 col-md-8 col-lg-6">
  
          <div className="card border border-dark shadow-sm rounded-4">
  
            {/* Card Header */}
  
            <div className="card-header bg-dark text-white text-center rounded-top-4 py-4">
  
              <div
                className="rounded-circle bg-white text-dark d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: "80px",
                  height: "80px",
                  fontSize: "35px"
                }}
              >
                👤
              </div>
  
              <h3 className="mb-1 fw-bold">
                My Profile
              </h3>
  
              <p className="mb-0 text-white-50">
                Account Information
              </p>
  
            </div>
  
  
            {/* Card Body */}
  
            <div className="card-body p-4">
  
              {userData && (
  
                <>
  
                  {/*  NAME  */}
  
                  <div className="border border-secondary rounded-3 p-3 mb-3">
  
                    <div className="d-flex align-items-center">
  
                      <div
                        className="bg-light border rounded-3 d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "45px",
                          height: "45px"
                        }}
                      >
                        👤
                      </div>
  
                      <div>
  
                        <small className="text-muted d-block">
                          Full Name
                        </small>
  
                        <span className="fw-semibold">
                          {userData?.name}
                        </span>
  
                      </div>
  
                    </div>
  
                  </div>
  
  
                  {/*  EMAIL  */}
  
                  <div className="border border-secondary rounded-3 p-3 mb-4">
  
                    <div className="d-flex align-items-center">
  
                      <div
                        className="bg-light border rounded-3 d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "45px",
                          height: "45px"
                        }}
                      >
                        ✉️
                      </div>
  
                      <div>
  
                        <small className="text-muted d-block">
                          Email Address
                        </small>
  
                        <span className="fw-semibold">
                          {userData?.email}
                        </span>
  
                      </div>
  
                    </div>
  
                  </div>
  
  
                  {/*  DIVIDER  */}
  
                  <hr className="my-4" />
  
  
                  {/*  ACTION BUTTONS  */}
  
                  <div className="row g-2">
  
                    <div className="col-12 col-sm-6">
  
                      <button
                        type="button"
                        className="btn btn-primary w-100 py-2 rounded-3"
                        onClick={() => {
  
                          setEditUser(userData);
  
                          setFormData({
                            name: userData?.name || "",
                            email: userData?.email || ""
                          });
  
                        }}
                      >
                        ✏️ Edit Profile
                      </button>
  
                    </div>
  
  
                    <div className="col-12 col-sm-6">
  
                      <button
                        type="button"
                        className="btn btn-outline-danger w-100 py-2 rounded-3"
                        onClick={handleDeleteUser}
                      >
                        🗑️ Delete Profile
                      </button>
  
                    </div>
  
                  </div>
  
                </>
  
              )}
  
            </div>
  
          </div>
  
  
          {/*  EDIT PROFILE  */}
  
          {editUser && (
  
            <div className="card border border-dark shadow-sm rounded-4 mt-4">
  
              {/* Edit Header */}
  
              <div className="card-header bg-dark text-white rounded-top-4 py-3">
  
                <h4 className="mb-0 fw-semibold">
                  ✏️ Edit Profile
                </h4>
  
              </div>
  
  
              {/* Edit Body */}
  
              <div className="card-body p-4">
  
                <form onSubmit={handleUpdateUser}>
  
                  {/*  NAME  */}
  
                  <div className="mb-4">
  
                    <label
                      htmlFor="name"
                      className="form-label fw-semibold"
                    >
                      Full Name
                    </label>
  
                    <input
                      type="text"
                      className="form-control border border-secondary rounded-3 py-2"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
  
                  </div>
  
  
                  {/*  EMAIL  */}
  
                  <div className="mb-4">
  
                    <label
                      htmlFor="email"
                      className="form-label fw-semibold"
                    >
                      Email Address
                    </label>
  
                    <input
                      type="email"
                      className="form-control border border-secondary rounded-3 py-2"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
  
                  </div>
  
  
                  {/*  DIVIDER  */}
  
                  <hr className="my-4" />
  
  
                  {/*  BUTTONS  */}
  
                  <div className="d-flex flex-column flex-sm-row gap-2">
  
                    <button
                      type="submit"
                      className="btn btn-success px-4 py-2 rounded-3"
                    >
                      ✓ Update Profile
                    </button>
  
  
                    <button
                      type="button"
                      className="btn btn-outline-secondary px-4 py-2 rounded-3"
                      onClick={() => setEditUser(null)}
                    >
                      Cancel
                    </button>
  
                  </div>
  
                </form>
  
              </div>
  
            </div>
  
          )}
  
        </div>
  
      </div>
  
    </div>
  );

}

export default Profile
