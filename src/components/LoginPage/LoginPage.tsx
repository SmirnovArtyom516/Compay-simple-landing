import React, { useState } from 'react';
import Input from '@mui/material/Input';
import { Button, Checkbox } from '@mui/material';
import styles from './loginPage.module.css';
import type { User } from '../../api/users';
import { Users } from '../../api/users';

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
        : setError('неверно введены логин или пароль');
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
          <h1 className={styles.mainText}>ВТренде</h1>
          <form onSubmit={AuthHandler}>
            <div className={styles.authInput}>
              <Input placeholder="Логин" value={login} onChange={loginHandler} />
              <Input placeholder="Пароль" value={password} onChange={passwordHandler} />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <div>
                <Checkbox checked={checked} onClick={() => setChecked(!checked)} />
                <span>пользовательское соглашение</span>
              </div>
              <div className={styles.enterButton}>
                <Button
                  type="submit"
                  sx={{ borderRadius: '10px' }}
                  variant="contained"
                  disabled={!(!!login && !!password && checked)}
                >
                  Войти
                </Button>
                <a style={{ textDecoration: 'none' }} href="/">
                  Проблемы со входом?
                </a>
                <a style={{ textDecoration: 'none' }} href="/">
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
