import styles from '../styles/Login.module.css';
import { Modal } from 'antd';
import { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

function Login() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Modal Register Settings
  const showRegister = () => {
    setIsRegisterOpen(true);
  };
  const handleRegisterCancel = () => {
    setIsRegisterOpen(false);
  };

  // Modal Login Settings
  const showLogin = () => {
    setIsLoginOpen(true);
  };
  const handleLoginCancel = () => {
    setIsLoginOpen(false);
  };

  return (
    <div className={styles.login}>

      <div className={styles.leftContent}></div>
        <img src="mouse.png" className={styles.logo} />
        <div className={styles.logContent}>
          <div>
            <h1 className={styles.text}>See what's happening</h1>
            <h2 className={styles.text}>Join Hackacheese today.</h2>
            <button className={styles.signup} onClick={() => showRegister()}>Sign up</button>
            <Modal open={isRegisterOpen} onCancel={handleRegisterCancel} className={styles.modal} footer={null}> <SignUp /> </Modal>
            <h4 className={styles.text}>Already have an account ?</h4>
            <button className={styles.signin} onClick={() => showLogin()}>Sign in</button>
            <Modal open={isLoginOpen} onCancel={handleLoginCancel} className={styles.modal} footer={null}> <SignIn /> </Modal>
          </div>
        </div>

    </div>
  );
}

export default Login;
