import React from "react";
import { Link } from "react-router";

import { ContactContext } from "../context/ContactContext";
import useNewUserForm from "../hooks/useNewUserForm";

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
  /* const initial_value = { Email: "", Username: "", error: false };
  const { loadUser } = useContactHook();
  const { setContacts } = useContext(ContactContext);

  const [formValue, setFormValue] = useState(initial_value);
  const [loading, setLoading] = useState(false);
  const [_, setMyError] = useState(null);

  const navigate = useNavigate();
  const [myMouseEvent, setMyMouseEvent] = useState(false);
  const changeButtonColor = () => {
    setMyMouseEvent(() => !myMouseEvent);
  };
  const [myFocusEvent, setMyFocusEvent] = useState({
    Email: false,
    Username: false,
  });
  const changeInputColor = (e) => {
    const eventName = e.target.name;
    setMyFocusEvent((prev) => ({ ...prev, [eventName]: !prev[eventName] }));
  };

  const handleSubmit = async (e, Username, Email) => {
    e.preventDefault();
    try {
      setLoading(true);
      setMyError(null);

      await loadUser(Username, Email, setContacts);
      navigate("/");
    } catch (error) {
      setMyError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const eventName = e.target.name;
    const eventValue = e.target.value;

    if (eventName === "Username" && eventValue.length < 3) {
      setFormValue((prev) => ({
        ...prev,
        error: true,
      }));

      return;
    }

    setFormValue((prev) => ({
      ...prev,
      [eventName]: eventValue,
      error: false,
    }));
  }; */
  return (
    <div>
      <div className="container">
        <div className="header-form-container">
          <h2>Add new contact! 👤</h2>
        </div>
        <div className="form-container">
          <form
            onSubmit={(e) =>
              handleSubmit(e, formValue.Username, formValue.Email)
            }
          >
            <div>
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

            <div>
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
      </div>

      <div>
        <h3>{formValue.error && "Check the lenght of your username"}</h3>
        <h3>
          🚶‍♂️‍➡️
          <span>
            {" "}
            <Link to={"/"}>Back to Chats</Link>
          </span>
        </h3>
      </div>
    </div>
  );
}
