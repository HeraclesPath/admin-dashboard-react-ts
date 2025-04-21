import { useState } from 'react';

const BasicInfoForm = () => {
  const [firstName, setFirstName] = useState('Dante');
  const [lastName, setLastName] = useState('Nero');
  const [nickName, setNickName] = useState('Dante');
  const [email, setEmail] = useState('brandonjasonsligh@gmail.com');
  const [phone, setPhone] = useState('201-773-1757');
  const [address, setAddress] = useState('371 Bergen Blvd, Fairview, NJ 07022');

  return (
    <div className="flex flex-col gap-3 xl:gap-7">
      <div className="flex items-center gap-3 xl:gap-5">
        <h4 className="font-semibold text-lg xl:text-2xl">Basic Information</h4>
        <div className="w-full h-[2px] bg-base-300 dark:bg-slate-700 mt-1"></div>
      </div>
      <div className="grid xl:grid-cols-3 gap-5">
        <div className="flex flex-col gap-5">
          <label className="flex flex-col">
            <span>First Name*</span>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input input-bordered" />
          </label>
          <label className="flex flex-col">
            <span>Last Name*</span>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="input input-bordered" />
          </label>
          <label className="flex flex-col">
            <span>Nickname</span>
            <input value={nickName} onChange={(e) => setNickName(e.target.value)} className="input input-bordered" />
          </label>
        </div>
        <div className="flex flex-col gap-5">
          <label className="flex flex-col">
            <span>Email*</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered" />
          </label>
          <label className="flex flex-col">
            <span>Phone</span>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="input input-bordered" />
          </label>
          <label className="flex flex-col">
            <span>Address</span>
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="textarea textarea-bordered"></textarea>
          </label>
        </div>
        <div className="flex flex-col gap-5">
          <span>Password</span>
          <div className="btn btn-disabled">Change Password</div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoForm;
