import React, { useState } from 'react';
import Input from '@mui/material/Input';
import { Button, Checkbox } from '@mui/material';
import styles from './loginPage.module.css';
import type { User } from '../../api/users';
import { Users } from '../../api/users';
import Logo from '../../utils/logo_500_500.jpg'

type Props = {
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

function LoginPage({ setUser }: Props): JSX.Element {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const AuthHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    Users.forEach((el) => {
      el.login === login && el.password === password
        ? setUser(el)
        : setError('неверно введен логин или пароль');
    });
  };
  const loginHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLogin(e.target.value);
  };
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.loginLanding}>
      <div className={styles.main}>
        <div className={styles.loginContainer}>
          {/* <h1 className={styles.mainText}>Подружка</h1> */}
          {/* <div style={{width: '10px'}}> */}
           <img style={{width: '300px'}} src="https://journal.podrygka.ru/wp-content/uploads/2019/06/logo_500_500.jpg" alt="" />
          {/* </div> */}
          <form onSubmit={AuthHandler}>
            <div className={styles.authInput}>
              <Input placeholder="Логин" value={login} onChange={loginHandler} />
              <Input placeholder="Пароль" value={password} onChange={passwordHandler} />
              {error && 
                <div style={{backgroundColor: '#f9dddd', paddingLeft: "25px"}}>
                  <p style={{ color: 'red', fontFamily: 'Open Sans', fontSize: '15px' }}>{error}</p>
                </div>
              }
              <div>
                <Checkbox style={{color: '#373737'}} checked={checked} onClick={() => setChecked(!checked)} />
                <a
                href='/'
                style={{fontSize: '14px', fontFamily: 'Open Sans'}}
                >пользовательское соглашение</a>
              </div>
              <div className={styles.enterButton}>
                <Button
                  className={styles.button}
                  type="submit"
                  sx={{ borderRadius: '10px', backgroundColor: 'purple' }}
                  variant="contained"
                  disabled={!(!!login && !!password && checked)}
                >
                  Войти
                </Button>
                <a style={{ textDecoration: 'none', fontFamily: 'Open Sans', marginTop: "20px", fontSize: '14px' }} href="/">
                  Проблемы со входом?
                </a>
                <a style={{ textDecoration: 'none', fontFamily: 'Open Sans', fontSize: '14px' }} href="/">
                  Техническая поддержка
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
