import React, { useState } from 'react';

const SignUp = () => {
  const [userStorage, setUserStorage] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    setUserStorage({ ...userStorage, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Inicia Sesión</h1>
      <form
        method='post'
        onSubmit={(e) => {
          submitHandler(e);
        }}>
        <label htmlFor='email'>E-mail:</label>
        <input
          type='email'
          value={userStorage.email}
          onChange={(e) => changeHandler(e)}
          id='email'
          name='email'
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          value={userStorage.password}
          id='password'
          name='password'
          onChange={(e) => changeHandler(e)}
        />

        <input type='submit' value='Log In' />
      </form>
    </>
  );
};

export default SignUp;
