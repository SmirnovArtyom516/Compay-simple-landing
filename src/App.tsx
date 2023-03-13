import React, { useState } from 'react';
import { Routes, Route, redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import type { User } from './api/users';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/UI/Navbar/Navbar';
import ProtectedRoute from './components/HOCs/ProtectRoute';
import Test from './components/Test/Test';
import Blog from './components/Blog/Blog';
import Info from './components/Info/Info';

function App(): JSX.Element {
  const [user, setUser] = useState<User | undefined>();
  console.log(user);
  return (
    <>
      {user && <Navbar setUser={setUser}/>}
      <Routes>
        <Route element={<ProtectedRoute redirect="/main" isAllowed={!user} />}>
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
        </Route>
        <Route element={<ProtectedRoute redirect="/login" isAllowed={!!user} />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/Пройти тест" element={<Test />} />
          <Route path="/Блог" element={<Blog />} />
          <Route path="/О нас" element={<Info />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
