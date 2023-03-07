import React, { useState } from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import type { User } from './api/users';
import MainPage from './components/MainPage/MainPage';

function App(): JSX.Element {
  const [user, setUser] = useState<User | undefined>();
  console.log(user);
  return (
    <div>
      {user ? (
        <>
          {' '}
          <MainPage />{' '}
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
