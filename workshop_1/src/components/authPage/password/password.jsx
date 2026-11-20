import { useRef, useState } from "react";
import './password.css'
import eyeOpenPng from './assets/eye-open.png'
import eyeHidePng from './assets/eye-hide.png'

const validate = (password) => {
  const currentErrors = []
  if (password.length < 8) {
    currentErrors.push('Password should be more than 8 characters')
    // setErrors(prev => [...prev, 'Password should be mothan 8 characters'])
  }
  if (!/[A-Z]/.test(password)) {
    currentErrors.push('Password should contian uppercase letter')
    // setErrors(prev => [...prev, 'Password should contian uppercase letter'])
  }

  if (/[\'\"\]\[]]/.test(password)) {
    currentErrors.push('Password should not contain special characters')
    // setErrors(prev => [...prev, 'Password should contian uppercase letter'])
  }

  return currentErrors
}

export const Password = (props) => {
  const { placeholder = "Password", isRegistration, passwordRef } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  // const passwordRef = useRef(null)

  const onChange = (el) => {
    setErrors([])
    const currentValue = el.currentTarget.value
    setPassword(currentValue);

    if (isRegistration) {
      const currentErrors = validate(currentValue)
      setErrors(currentErrors)
    }
  }

  return (
    <div className={"field-group"}>
      <div className={"input-wrapper"}>
        <input
          ref={passwordRef}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={password}
          onChange={onChange}
          className={['auth-input', 'auth-input--with-icon'].join(' ')}
        />
        <div className={"input-actions"}>
          <button
            type="button"
            onClick={() => setShowPassword((prev) => {
              // if (prev == true ) return false
              // if (prev == false ) return true
              return !prev
            })}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="icon-toggle-btn"
          >
            {showPassword
              ? <img src={eyeHidePng} alt="Hide password" />
              : <img src={eyeOpenPng} alt="Show password" />}
          </button>
        </div>
      </div>
      {
        isRegistration && <div className="error-list">
          {
            errors.map(error => <li className="error">{error}</li>)
          }
        </div>
      }
    </div>
  )
}