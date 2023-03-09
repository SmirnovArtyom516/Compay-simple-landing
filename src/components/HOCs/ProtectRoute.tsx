import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  // eslint-disable-next-line react/require-default-props
  children?: JSX.Element | undefined;
  isAllowed: boolean;
  redirect: string;
};

export default function ProtectedRoute({ children, isAllowed, redirect }: Props): JSX.Element {
  if (!isAllowed) {
    return <Navigate to={redirect} replace />;
  }
  return children || <Outlet />;
}
