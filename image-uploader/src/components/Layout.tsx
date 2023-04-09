import { useLogInModal } from '@/hooks';
import React, { FC, PropsWithChildren, useCallback } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const loginModal = useLogInModal();
  const logout = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal])
  return (
    <>
      <div className='
        w-full 
        h-auto 
        py-4 
        px-16
        flex 
        justify-between 
        items-center
        bg-blue-500 
        absolute
      '>
        <button 
          onClick={logout}
          className='
            text-white
            cursor-pointer 
            bg-transparent 
            z-10 
            active:text-slate-300 
            hover:text-slate-200 
            transition
          '>
            Гарах
          </button>
      </div>
      { children }
    </>
  )
}
