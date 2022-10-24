import React from 'react';

export function validate(input) {
  //username
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
//password
if (!input.password) {
  errors.password = 'password is required';
} else if (!/(?=.*[0-9])/.test(input.password)) {
  errors.password = 'password is invalid';
}
  return errors;
};

export default function  Form() {

  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({});


  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  return (
      <>
       <form>
        <label htmlFor='username'>Username:</label>
        <input className={errors.username && 'danger'} type="text" name='username' id='username' onChange={handleInputChange} value={input.username}  />

        {errors.username && (<p className="danger">{errors.username}</p>)}

        <label htmlFor='password'>Password:</label>
        <input className={errors.password && 'danger'} type="text" name='password' id='password' onChange={handleInputChange} value={input.password}  />

        {errors.password && (<p className="danger">{errors.password}</p>)}

        <input type="submit" />
       </form>
      </>
  )
}


