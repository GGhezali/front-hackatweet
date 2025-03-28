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
  const handleRegisterOk = () => {
    setIsRegisterOpen(false);
  };
  const handleRegisterCancel = () => {
    setIsRegisterOpen(false);
  };

  // Modal Login Settings
  const showLogin = () => {
    setIsLoginOpen(true);
  };
  const handleLoginOk = () => {
    setIsLoginOpen(false);
  };
  const handleLoginCancel = () => {
    setIsLoginOpen(false);
  };

  return (
    <div className={styles.login}>

      <div className={styles.leftContent}>
        
      </div>

      <div className={styles.logContent}>
        <h1 className={styles.text}>See what's happening</h1>
        <h2 className={styles.text}>Join Hackacheese today.</h2>

        <button className={styles.signup} onClick={() => showRegister()}>Sign up</button>
        <Modal open={isRegisterOpen} onOk={handleRegisterOk} onCancel={handleRegisterCancel}> <SignUp /> </Modal>

        <h4 className={styles.text}>Already have an account ?</h4>

        <button className={styles.signin} onClick={() => showLogin()}>Sign in</button>
        <Modal open={isLoginOpen} onOk={handleLoginOk} onCancel={handleLoginCancel}> <SignIn /> </Modal>
      </div>

    </div>
  );
}

export default Login;
