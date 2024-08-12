import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const hanndleClick = async (e) => {
    e.preventDefault();
    const finalCredential = {
      email: credentials.email,
      password: credentials.password,
    };
    console.log(finalCredential);
    try {
      const request1 = new Request(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(finalCredential),
      });

      const request2 = request1.clone();

      const response = await fetch(request2);
      if (!response.ok) {
        const data = await response.json(); // Parse the JSON from the response
        console.log("data", data); // Do something with the data here
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }
      console.log(response.status);
      const data = await response.json(); // Parse the JSON from the response
      console.log("data", data); // Do something with the data here
      if (data.authtoken && data.authtoken != null) {
        sessionStorage.setItem("authToken", data.authtoken);
        navigate('/'); // Redirect to homepage
    window.location.reload();
        
      }
      else{
        setErrorMessage("you didt get auth token.");
        console.log("you didt get auth token.");
      }
    } catch (error) {
      setErrorMessage("response was not ok so you didt get auth token.");
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <form onSubmit={hanndleClick}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email" // Make sure to include the name attribute
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            value={credentials.email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password" // Make sure to include the name attribute
            placeholder="Password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {errorMessage && <h2>{errorMessage}</h2>}

    </>
  );
};

export default Login;
