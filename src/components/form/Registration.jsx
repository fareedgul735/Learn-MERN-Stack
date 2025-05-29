import { useEffect, useState } from "react";
import "./Registration.css";

const RegistrationForm = ({ isDark = false }) => {
  // const [errors, setError] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [formValidationData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    cnic_number: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formValidationData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValidationData);
  };

  return (
    <>
      <div className={isDark ? "dark-bg" : "form-container"}>
        <div className="registration-gif"></div>
        {!showForm ? (
          <button className="register-button" onClick={() => setShowForm(true)}>
            <p className="register-text"> Registration Form</p>
            <i className=" register-icon fa-solid fa-address-card"></i>
          </button>
        ) : (
          <form className="form-validation">
            <div className="close-icon" onClick={() => setShowForm(false)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <h1>Registration Form</h1>
            <p>FirstName:</p>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={onChangeHandler}
            />
            <p>LastName:</p>

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={onChangeHandler}
            />
            <p>PhonNumber:</p>

            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={onChangeHandler}
            />
            <p>Email:</p>

            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={onChangeHandler}
            />
            <p>Password:</p>

            <input
              type="text"
              name="password"
              placeholder="Password"
              onChange={onChangeHandler}
            />
            <p>Cnic Number:</p>

            <input
              type="text"
              name="cnic_number"
              placeholder="Cnic Number"
              onChange={onChangeHandler}
            />
            <button className="register-button" onClick={handleSubmit}>
              <p className="register-text"> Registration </p>
              <i className=" register-icon fa-solid fa-address-card"></i>
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default RegistrationForm;
