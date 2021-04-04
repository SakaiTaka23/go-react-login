import { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';

export default function Home() {
  const [message, setMessage] = useState('');
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://127.0.0.1:5000/api/user', {
        credentials: 'include',
      });
      if (response.status === 200) {
        const content = await response.json();
        setMessage(`Hi ${content.name}`);
        setAuth(true);
      }
      if (response.status === 401) {
        setMessage('You are not logged in');
      }
    })();
  });

  return <Layout auth={auth}>{message}</Layout>;
}
