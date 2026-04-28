import React, { useContext, useState } from "react";
import { Link /*  useNavigate */ } from "react-router";
import useContactHook from "../hooks/useContactHook";
import { ContactContext } from "../context/ContactContext";

const useNewUserForm = () => {
  const initial_value = { Email: "", Username: "", error: false };

  const { loadUser } = useContactHook();
  const { setContacts } = useContext(ContactContext);

  const [formValue, setFormValue] = useState(initial_value);
  const [loading, setLoading] = useState(false);
  const [_, setMyError] = useState(null);
  const [myFocusEvent, setMyFocusEvent] = useState({
    Email: false,
    Username: false,
  });
  //const navigate = useNavigate();
  const [myMouseEvent, setMyMouseEvent] = useState(false);

  const changeButtonColor = () => {
    setMyMouseEvent(() => !myMouseEvent);
  };

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
      //navigate("/");
    } catch (error) {
      setMyError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isInvalid =
      name === "Username" && value.length > 0 && value.length < 3;

    setFormValue((prev) => ({
      ...prev,
      [name]: value,
      error: isInvalid,
    }));
    console.log(formValue);
  };

  return {
    handleChange,
    handleSubmit,
    changeInputColor,
    myFocusEvent,
    changeButtonColor,
    formValue,
    loading,
  };
};

export default useNewUserForm;
