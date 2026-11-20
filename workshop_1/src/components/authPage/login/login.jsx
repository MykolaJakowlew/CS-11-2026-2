import './login.css'
import { useEffect, useRef, useState } from "react";
import { SocialAuthList } from '../socialAuthList/socialAuthList';
import { Password } from '../password/password';
import { ToastContainer, toast } from 'react-toastify';
import { userLogin } from '../../../service/user.service'

export const Login = (props) => {
  const { isActive } = props
  const [rememberMe, setRememberMe] = useState(false);
  // const [email, setEmail] = useState('')
  const emailRef = useRef()
  const passwordRef = useRef()

  // useEffect(() => {
  //   toast.success("This is success")
  //   toast.error("This is error")
  //   toast.warning("This is warning")
  // })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value
    const password = passwordRef.current.value
    try {
      const user = await userLogin(email, password)
      localStorage.setItem('userData', JSON.stringify(user))
      toast.success('User login success')
    } catch (err) {
      toast.error(err.toString())
    }
  }
  return (
    <div
      className={[
        'form-panel',
        isActive ? 'form-panel--visible' : 'form-panel--login-hidden'
      ].join(' ')}
    >
      <div className={"form-inner"}>
        <h2 className={"form-title"}>Sign In</h2>

        <form onSubmit={handleSubmit} noValidate className={"auth-form"}>
          <div className={"field-group"}>
            <input
              type="text"
              ref={emailRef}
              // value={email}
              // onChange={e => setEmail(e.target.value)}
              placeholder="Login or Email"
              className={'auth-input'}
            />
          </div>

          <Password passwordRef={passwordRef} />
          <ToastContainer />
          <div className={"form-options"}>
            <label className={"checkbox-label"}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className={"checkbox-input"}
              />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              onClick={() => onForgotPassword(identifier)}
              className={"forgot-link"}
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button type="submit" className={"primary-btn"}>
            LOGIN
          </button>
        </form>

        {/* Social Auth Section */}
        <div className={"social-section"}>
          <div className={"social-divider"}>
            <span className={"social-divider-line"} />
            <span className={"social-divider-text"}>or sign in with</span>
            <span className={"social-divider-line"} />
          </div>

          <SocialAuthList />
        </div>
      </div>
    </div>
  );
}