import { useState } from 'react';
import './authPage.css'
import { SlidingOverlay } from './slidingOverlay/slidingOverlay';
import { Login } from './login/login';
import { Registration } from './registration/registration';

export const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className={'auth-page'}>
      <main className={'auth-card'}>
        <div className={'auth-grid'}>
          <div className={'auth-half'}>
            <Registration isActive={isRegister} />
          </div>
          <div className={'auth-half'}>
            <Login isActive={!isRegister} />
          </div>
        </div>
        <SlidingOverlay
          isRegister={isRegister}
          onToggle={() => setIsRegister((prev) => !prev)}
        />
      </main>
    </div>
  );
}