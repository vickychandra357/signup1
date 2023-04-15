import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (!formData.email) {
      errors.email = 'Email is    required';
    }
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    // if(!formData.email && !formData.name && !formData.password && !formData.confirmPassword && formData.password !== formData.confirmPassword){
    //   errors.paraError='Error :All the fields are mandatory'
    // }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log(formData);
    }
  };

  return (
    <div class='container'>
    <form onSubmit={handleSubmit}>
      <header>
        <h1>Signup Form</h1>
      </header>
    <br></br>
   
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Full Name' 
          class='WIDTH'
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      <br></br>
      <hr></hr>
    <br></br>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          class='WIDTH'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      <br></br>
      <hr></hr>
    <br></br>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='Password'
          class='WIDTH'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      <br></br>
      <hr></hr>
    <br></br>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder='Confirm Password'
          class='WIDTH'
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      <br></br>
      <hr></hr>
      <button type="submit">Sign up</button>
    </form>
    </div>
  );
};
export default App;
