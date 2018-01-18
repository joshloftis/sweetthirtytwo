import React from 'react';

const SignUp = () => (
  <div>
    <input type="text" placeholder="First Name" required/>
    <input type="text" placeholder="Last Name" required/>
    <input type="text" placeholder="Email Address" required/>
    <input type="text" placeholder="Username" required/>
    <input type="password" placeholder="Password" required/>
    <input type="Submit"/>
  </div>
);

export default SignUp;
