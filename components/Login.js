import styles from '../styles/Login.module.css';
import Link from 'next/link';

function Login() {
  return (
    <div className={styles.login}>
        <h1 className={styles.text}>See what's happening</h1>
        <h2 className={styles.text}>Join Hackatweet today.</h2>
        <Link href="/signup"><button className={styles.signup}>Sign up</button></Link>
        <h4 className={styles.text}>Already have an account ?</h4>
        <button className={styles.signin}>Sign in</button>
    </div>
  );
}

export default Login;
