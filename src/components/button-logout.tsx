'use client';

import { signOut } from 'next-auth/react';

const ButtonLogout = () => {
  return (
    <button onClick={() => signOut()} className='text-white hover:underline'>
      Logout
    </button>
  );
};

export default ButtonLogout;
