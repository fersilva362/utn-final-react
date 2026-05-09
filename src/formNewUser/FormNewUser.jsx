import React from "react";
import { Link } from "react-router";

import { ContactContext } from "../context/ContactContext";
import useNewUserForm from "../hooks/useNewUserForm";
import "./FormComponent.css";

export default function FormNewUser() {
  const {
    handleSubmit,
    handleChange,
    formValue,
    myFocusEvent,
    changeButtonColor,
    changeInputColor,
    loading,
    myMouseEvent,
  } = useNewUserForm();

  return (
    <div className="form-page-wrapper">
      <div className="form-card">
        <div className="profile-preview">
          <div className="avatar-placeholder">👤</div>
          <header className="header-form-container">
            <h2>Add New Contact</h2>
          </header>
        </div>

        <div className="form-container">
          <form
            onSubmit={(e) =>
              handleSubmit(e, formValue.Username, formValue.Email)
            }
          >
            <div className="input-wrapper">
              <label className="input-label" htmlFor="Email">
                Email
              </label>
              <input
                className={
                  !myFocusEvent.Email
                    ? "input-container"
                    : "input-container-active"
                }
                type="email"
                id="Email"
                name="Email"
                required
                placeholder=" email"
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    alert("Presionaste Enter before complete username field");
                  }
                }}
                onBlur={changeInputColor}
                onFocus={changeInputColor}
              />
            </div>

            <div className="input-wrapper">
              <label className="input-label" htmlFor="Username">
                Username
              </label>
              <input
                id="Username"
                name="Username"
                type="text"
                required
                className={
                  !myFocusEvent.Username
                    ? "input-container"
                    : "input-container-active"
                }
                placeholder="username"
                onChange={(e) => handleChange(e)}
                onBlur={changeInputColor}
                onFocus={changeInputColor}
              />
            </div>
            <button
              className={!myMouseEvent ? "login-btn" : "login-btn-active"}
              type="submit"
              disabled={loading}
              onMouseLeave={changeButtonColor}
              onMouseEnter={changeButtonColor}
            >
              {!loading ? "Add Contact" : "Loading"}
            </button>
          </form>
        </div>
        <footer className="form-footer">
          {formValue.error && (
            <p className="error-message">Username is too short</p>
          )}
          <Link to="/" className="back-link">
            Back to Chats
          </Link>
        </footer>
      </div>
    </div>
  );
}
