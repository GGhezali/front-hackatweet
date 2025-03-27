import styles from '../styles/SignUp.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user';

function SignUp() {
    const dispatch = useDispatch();

    const [firstname, setFirstname] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: firstname, username: username, password: password }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    console.log(data.newDoc)
                    dispatch(login({ username: username, token: data.newDoc.token }));
                    setFirstname('');
                    setUsername('');
                    setPassword('');
                    window.location.href = "http://localhost:3001/"
                }
            });
    };

  return (
    <div className={styles.login}>
        <h2 className={styles.text}>Create your Hackatweet account</h2>
        <div className={styles.userInfos}>
            <input type="text" placeholder="Firstname" className={styles.inputs} onChange={(e) => setFirstname(e.target.value)} value={firstname} />
            <input type="text" placeholder="Username" className={styles.inputs} onChange={(e) => setUsername(e.target.value)} value={username} />
		    <input type="password" placeholder="Password" className={styles.inputs} onChange={(e) => setPassword(e.target.value)} value={password} />
		    <button onClick={() => handleRegister()} className={styles.signup}>Sign up</button>
        </div>
    </div>
  );
}

export default SignUp;
