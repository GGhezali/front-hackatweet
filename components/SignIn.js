import styles from '../styles/SignIn.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user';
import Link from 'next/link';

function SignIn() {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username: username, token: data.token }));
                    setUsername('');
                    setPassword('');
                    window.location.href = "http://localhost:3001/"
                }
            });
    };

  return (
    <div className={styles.login}>
        <h2 className={styles.text}>Connect to Hackatweet</h2>
        <div className={styles.userInfos}>
            <input type="text" placeholder="Username" className={styles.inputs} onChange={(e) => setUsername(e.target.value)} value={username} />
		    <input type="password" placeholder="Password" className={styles.inputs} onChange={(e) => setPassword(e.target.value)} value={password} />
		    <button onClick={() => handleLogin()} className={styles.signin}>Sign in</button>
        </div>
    </div>
  );
}

export default SignIn;
