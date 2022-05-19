import React, { useState } from 'react';

const SignUp = () => {
  const [userStorage, setUserStorage] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    phone: '',
  });

  const changeHandler = (e) => {
    setUserStorage({ ...userStorage, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Únete a nosotros</h1>
      <form
        method='post'
        onSubmit={(e) => {
          submitHandler(e);
        }}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          value={userStorage.name}
          onChange={(e) => changeHandler(e)}
          id='name'
          name='name'
        />
        <label htmlFor='surname'>Surname:</label>
        <input
          type='text'
          value={userStorage.surname}
          onChange={(e) => changeHandler(e)}
          id='surname'
          name='surname'
        />
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
        <label htmlFor='phone'>Phone Number:</label>
        <input
          type='tel'
          value={userStorage.phone}
          onChange={(e) => changeHandler(e)}
          id='tel'
          name='phone'
        />
        <input type='submit' value='Register' />
      </form>
    </>
  );
};

export default SignUp;
