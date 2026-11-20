import './slidingOverlay.css'

const Overlay = (props) => {
  const { isRegister, onToggle, subtext, buttonText, heading, mainClass } = props;
  return (
    <div
      className={`overlay-content ${mainClass || ''}`}
      aria-hidden={isRegister}
    >
      <h2 className="overlay-heading">{heading}</h2>
      <p className="overlay-subtext">
        {subtext}
      </p>
      <button
        type="button"
        tabIndex={!isRegister ? 0 : -1}
        onClick={onToggle}
        className="ghost-btn"
      >
        {buttonText}
      </button>
    </div>
  )
}

export const SlidingOverlay = (props) => {
  const { isRegister, onToggle } = props;
  return (
    <div className={`overlay-panel ${isRegister ? 'overlay-panel--right' : ''}`}>
      <Overlay
        isRegister={isRegister}
        onToggle={onToggle}
        heading={"Welcome Back!"}
        subtext={"Already have an account? Sign in to continue your journey"}
        buttonText={"REGISTER"}
        mainClass={!isRegister ? 'overlay-content--visible' : 'overlay-content--hidden-left'}
      />
      <Overlay
        isRegister={isRegister}
        onToggle={onToggle}
        heading={"Welcome"}
        subtext={"Join Our Unique Platform, Explore a New Experience"}
        buttonText={"LOGIN"}
        mainClass={isRegister ? 'overlay-content--visible' : 'overlay-content--hidden-right'}
      />
    </div>
  );
}