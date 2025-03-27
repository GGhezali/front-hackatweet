import styles from '../styles/SignUp.module.css';

function SignUp() {
  return (
    <div className={styles.login}>
        <h2 className={styles.text}>Create your Hackatweet account</h2>
        <div className={styles.userInfos}>
            <input type="text" placeholder="Firstname" className={styles.inputs} />
            <input type="text" placeholder="Username" className={styles.inputs} />
		    <input type="password" placeholder="Password" className={styles.inputs} />
		    <button className={styles.signup}>Sign up</button>
        </div>
    </div>
  );
}

export default SignUp;
