import React, { SyntheticEvent, useState } from 'react';
import Layout from '../layouts/Layout';
import { useRouter } from 'next/router';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch('http://127.0.0.1:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    await router.push('/login');
  };

  return (
    <Layout>
      <form onSubmit={submit}>
        <h1 className='h3 mb-3 fw-normal'>Register</h1>
        <input
          type='text'
          className='form-control'
          placeholder='name'
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          className='form-control'
          placeholder='mail'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          className='form-control'
          placeholder='password'
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='w-100 btn btn-lg btn-primary' type='submit'>
          Sign In
        </button>
      </form>
    </Layout>
  );
};

export default Register;
