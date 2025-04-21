import ChangeThemes from '../components/ChangesThemes';
import { DiReact } from 'react-icons/di';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-base-200 relative">
      <div className="absolute top-5 right-5 z-[99]">
        <ChangeThemes />
      </div>

      <div className="w-full h-screen xl:h-auto xl:w-[30%] 2xl:w-[25%] 3xl:w-[20%] bg-base-100 rounded-lg shadow-md flex flex-col items-center p-5 pb-7 gap-8 pt-20 xl:pt-7">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <DiReact className="text-4xl xl:text-6xl text-primary animate-spin-slow -ml-3" />
          <span className="text-lg xl:text-3xl font-semibold text-base-content dark:text-neutral-200">
            Admin Dashboard
          </span>
        </div>

        <span className="xl:text-xl font-semibold">Hello, 👋 Welcome Back!</span>

        {/* Form */}
        <form className="w-full flex flex-col gap-3">
          <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 opacity-70" viewBox="0 0 16 16">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793l6.674 3.217a.75.75 0 0 0 .652 0L15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" className="grow outline-none border-none h-auto" placeholder="Email" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 opacity-70" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M14 6a4 4 0 1 1-4.899 3.899L7.146 11.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 0 1 14 6Zm-4-2a.75.75 0 1 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 1 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
            </svg>
            <input type="password" className="grow outline-none border-none h-auto" placeholder="Password" />
          </label>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center">
            <label className="label cursor-pointer gap-2">
              <input type="checkbox" defaultChecked className="checkbox w-4 h-4 rounded-md checkbox-primary" />
              <span className="label-text text-xs">Remember me</span>
            </label>
            <a href="#" className="link link-primary font-semibold text-xs">Forgot Password?</a>
          </div>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="btn btn-block btn-primary"
          >
            Log In
          </button>

          <div className="divider text-sm">OR</div>

          {/* Social Login */}
          <div className="flex justify-center items-center gap-4">
            <button type="button" className="btn btn-circle dark:btn-neutral">
              <img src="/icons8-microsoft.svg" alt="Microsoft" className="w-6" />
            </button>
            <button type="button" className="btn btn-circle dark:btn-neutral">
              <img src="/icons8-google.svg" alt="Google" className="w-6" />
            </button>
            <button type="button" className="btn btn-circle dark:btn-neutral">
              <img src="/icons8-apple-black.svg" alt="Apple" className="w-6 dark:hidden" />
              <img src="/icons8-apple-white.svg" alt="Apple" className="w-6 hidden dark:block" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
