'use client'


import {SessionProvider} from 'next-auth/react';
import React from 'react'

type MyComponentProps = React.PropsWithChildren<{}>;

export const AuthProvider = ({children}: MyComponentProps) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

