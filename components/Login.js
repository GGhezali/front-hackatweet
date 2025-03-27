import styles from '../styles/Login.module.css';

function Login() {
  return (
    <div className={styles.login}>
        <h1 className={styles.text}>See what's happening</h1>
        <h2 className={styles.text}>Join Hackatweet today.</h2>
        <button className={styles.signup}>Sign up</button>
        <h4 className={styles.text}>Already have an account ?</h4>
        <button className={styles.signin}>Sign in</button>
    </div>
  );
}

export default Login;
