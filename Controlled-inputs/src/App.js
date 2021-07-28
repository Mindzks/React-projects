import React, { useState } from "react";

// This code adds users to the array. When user enters his name and email, clicks submit button, eventHandler runs and checks
// if all needed information was provided. If yes, then user is added to the people list. If not you get
// notification on the console about the issue.
//
//For user to be able to write his name and email, I'm using onChange, in it I wrote function
//which allows to write text and change name and email values.
const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    //Prevents from submitting the form
    e.preventDefault();
    console.log(firstName, email);
    if (firstName && email) {
      const person = { firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
      console.log("User was added to the list");
    } else {
      console.log(
        "Not all information was provided, user isn't added to the list"
      );
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name :</label>
          <input
            type="name"
            id="firstName"
            name="fistName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ControlledInputs;
