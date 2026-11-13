import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updatePasswordAPI } from "../../Services/userFunctions";

import {
  updatePasswordRequestStart,
  updatePasswordRequestSuccess,
  updatePasswordRequestFail
} from "../../redux/user/userSlice";


const UpdatePassword = () => {

  const dispatch = useDispatch();

  const {
    loading,
    success,
    error,
    message
  } = useSelector(
    (state) => state.user.updatePasswordRequest
  );


  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleSubmit = async (e) => {

    e.preventDefault();


    // Check new password

    if (newPassword !== confirmPassword) {

      dispatch(
        updatePasswordRequestFail(
          "New password and confirm password do not match"
        )
      );

      return;
    }


    dispatch(updatePasswordRequestStart());


    try {

      const res = await updatePasswordAPI({
        currentPassword,
        newPassword
      });


      if (!res || res.error || !res.success) {

        dispatch(
          updatePasswordRequestFail(
            res?.message || "Password update failed"
          )
        );

        return;
      }


      dispatch(updatePasswordRequestSuccess(res));


      // Clear inputs after success

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");


    } catch (error) {

      dispatch(
        updatePasswordRequestFail(
          error.message || "Something went wrong"
        )
      );

    }

  };


  return (

    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-8 col-lg-6">

          <div className="card shadow-sm border">

            <div className="card-body p-4 p-md-5">


              {/* Header */}

              <div className="text-center mb-4">

                <h3 className="fw-bold mb-2">
                  🔒 Update Password
                </h3>

                <p className="text-muted mb-0">
                  Keep your account secure by updating your password.
                </p>

              </div>


              {/* Success Message */}

              {success && (

                <div className="alert alert-success">

                  {message}

                </div>

              )}


              {/* Error Message */}

              {error && (

                <div className="alert alert-danger">

                  {message}

                </div>

              )}


              {/* Form */}

              <form onSubmit={handleSubmit}>


                {/* Current Password */}

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Current Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your current password"
                    value={currentPassword}
                    onChange={(e) =>
                      setCurrentPassword(e.target.value)
                    }
                    required
                  />

                </div>


                {/* New Password */}

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    New Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) =>
                      setNewPassword(e.target.value)
                    }
                    required
                  />

                </div>


                {/* Confirm Password */}

                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Confirm New Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    required
                  />

                </div>


                {/* Submit Button */}

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >

                  {loading
                    ? "Updating Password..."
                    : "Update Password"}

                </button>


              </form>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};


export default UpdatePassword;