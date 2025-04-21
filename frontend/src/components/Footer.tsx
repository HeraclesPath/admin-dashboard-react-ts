// import React from 'react';
import { DiReact } from 'react-icons/di';

const Footer = () => {
  return (
    <div className="w-full px-5 py-5 mt-5 xl:m-0 flex justify-between items-center gap-2 font-semibold xl:text-sm border-t border-base-300 bg-base-100">
      <span className="hidden xl:inline-flex text-sm">
        Admin Dashboard
      </span>
      <div className="flex gap-1 items-center">
        <span className="text-sm">© Dante Admin Dashboard</span>
        <DiReact className="text-2xl xl:text-xl 2xl:text-2xl text-primary animate-spin-slow" />
      </div>
    </div>
  );
};

export default Footer;
