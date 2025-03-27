import styles from '../styles/SignUp.module.css';
import { useState } from 'react';

function SignUp() {
    const [firstname, setFirstname] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className={styles.login}>
        <h2 className={styles.text}>Create your Hackatweet account</h2>
        <div className={styles.userInfos}>
            <input type="text" placeholder="Firstname" className={styles.inputs} onChange={(e) => setFirstname(e.target.value)} value={firstname} />
            <input type="text" placeholder="Username" className={styles.inputs} onChange={(e) => setUsername(e.target.value)} value={username} />
		    <input type="password" placeholder="Password" className={styles.inputs} onChange={(e) => setPassword(e.target.value)} value={password} />
		    <button className={styles.signup}>Sign up</button>
        </div>
    </div>
  );
}

export default SignUp;
