import './socialAuthList.css'
import googlePng from './assets/google.png'
import facebookPng from './assets/facebook.png'
import githubPng from './assets/github.png'
import linkedinPng from './assets/linkedin.png'


export const SocialAuthList = () => {
  const providers = [
    { id: 'google', name: 'Google', label: `with Google`, icon: googlePng },
    { id: 'facebook', name: 'Facebook', label: `with Facebook`, icon: facebookPng },
    { id: 'github', name: 'GitHub', label: `with GitHub`, icon: githubPng, },
    { id: 'linkedin', name: 'LinkedIn', label: `with LinkedIn`, icon: linkedinPng },
  ];
  return (
    <div className="social-list">
      {providers.map((provider) => (
        <button
          key={provider.id}
          type="button"
          onClick={() => onSocialSelect(provider.name)}
          className="social-btn"
        >
          <img  className="social-icon" src={provider.icon} alt={provider.name} />
        </button>
      ))}
    </div>
  );
}