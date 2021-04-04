import { useRouter } from 'next/router';
import React, { SyntheticEvent, useState } from 'react';
import Layout from '../layouts/Layout';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch('http://127.0.0.1:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    });

    await router.push('/');
  };

  return (
    <Layout>
      <form onSubmit={submit}>
        <h1 className='h3 mb-3 fw-normal'>login</h1>
        <input
          type='email'
          className='form-control'
          placeholder='email'
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
          サインイン
        </button>
      </form>
    </Layout>
  );
};

export default Login;
