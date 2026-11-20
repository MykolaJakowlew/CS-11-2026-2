import './registration.css'
import { SocialAuthList } from "../socialAuthList/socialAuthList";
import { Password } from "../password/password";
import { useRef, useState } from 'react';

export const Registration = (props) => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmaPasswordRef = useRef(null)
  const [errors, setErrors] = useState({
    email: [],
    password: [],
    currentPassword: []
  })
  const onSubmit = (e) => {
    e.preventDefault();
    const currentErrors = {
      email: [],
      password: [],
      currentPassword: []
    }
    const email = emailRef.current.value
    if (!email) {
      currentErrors.email.push('Email should be added')
    }

    const password = passwordRef.current.value
    if (!password) {
      currentErrors.password.push('Password should be added')
    }

    const confirmaPassword = confirmaPasswordRef.current.value
    if (!confirmaPassword) {
      currentErrors.currentPassword.push('Confirm password should be added')
    }

    if (confirmaPassword && password && confirmaPassword !== password) {
      currentErrors.currentPassword.push('Password does not match')

    }

    setErrors(currentErrors)
  }

  return (
    <div
      className={`form-panel form-panel--visible`}
    >
      <div className="form-inner">
        <h2 className="form-title form-title--compact">Create Account</h2>

        <form noValidate className="auth-form auth-form--compact">
          <div className="field-group">
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className={`auth-input`}
            />
          </div>
          {
            errors.email.map(error => <li>{error}</li>)
          }

          <Password placeholder="Password" isRegistration={true} passwordRef={passwordRef} />
          {
            errors.password.map(error => <li>{error}</li>)
          }
          <Password
            placeholder="Confirm Password"
            isRegistration={true}
            passwordRef={confirmaPasswordRef}
          />
          {
            errors.currentPassword.map(error => <li>{error}</li>)
          }

          <button type="submit" onClick={onSubmit} className="primary-btn">
            REGISTER
          </button>
        </form>

        <div className="social-section social-section--compact">
          <div className="social-divider">
            <span className="social-divider-line" />
            <span className="social-divider-text">or register with</span>
            <span className="social-divider-line" />
          </div>

          <SocialAuthList />
        </div>
      </div>
    </div>
  );
}