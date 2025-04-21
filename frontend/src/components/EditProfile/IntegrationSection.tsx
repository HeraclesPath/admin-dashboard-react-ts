import toast from 'react-hot-toast';

const IntegrationSection = () => {
  return (
    <div className="flex flex-col gap-6 xl:gap-7">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-5">
          <h4 className="font-semibold text-lg xl:text-2xl">Account Integrations</h4>
          <div className="w-full h-[2px] bg-base-300 dark:bg-slate-700 mt-1"></div>
        </div>
        <span className="text-sm text-neutral-400 dark:text-neutral-content">
          Authorize faster and easier with your external service account.
        </span>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-6 xl:grid-cols-3 xl:flex gap-5">
        <div className="col-span-2 flex flex-col gap-5 xl:w-[240px]">
          <button
            onClick={() => toast('Not available', { icon: '😠' })}
            className="btn btn-block btn-disabled justify-start"
          >
            <img className="w-6 opacity-20" src="/icons8-microsoft.svg" alt="microsoft" />
            <span className="text-xs xl:text-sm">Connect with Microsoft</span>
          </button>
          <div className="px-4 flex items-center gap-2 text-sm font-semibold">
            <img className="w-6" src="/icons8-google.svg" alt="google" />
            <span className="text-xs xl:text-sm">Connected with Google</span>
          </div>
          <button
            onClick={() => toast('Not available', { icon: '😠' })}
            className="btn btn-block btn-disabled justify-start"
          >
            <img className="dark:hidden w-6 opacity-20" src="/icons8-apple-black.svg" alt="apple" />
            <img className="hidden dark:block w-6 opacity-20" src="/icons8-apple-white.svg" alt="apple" />
            <span className="text-xs xl:text-sm">Connect with Apple</span>
          </button>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <button className="btn btn-ghost text-error"></button>
          <button
            onClick={() => toast('Not available', { icon: '😠' })}
            className="btn btn-ghost btn-disabled text-error text-xs xl:text-sm"
          >
            Disconnect
          </button>
          <button className="btn btn-ghost text-error"></button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;