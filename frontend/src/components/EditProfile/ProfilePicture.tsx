import { useRef, useState, ChangeEvent } from 'react';
import { HiOutlinePencil } from 'react-icons/hi2';

const ProfilePicture = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUpload = e.target.files[0];
      setPreview(URL.createObjectURL(imageUpload));
    }
  };

  return (
    <div className="flex items-center gap-3 xl:gap-8 xl:mb-4">
      <div className="relative inline-flex">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="btn btn-circle btn-sm xl:btn-md top-0 right-0 absolute z-[1]"
        >
          <HiOutlinePencil className="text-xs xl:text-lg" />
        </button>
        <div className="avatar">
          <div className="w-24 xl:w-36 2xl:w-48 rounded-full">
            <img
              src={
                preview ||
                'https://avatars.githubusercontent.com/u/74099030?v=4'
              }
              alt="profile"
            />
          </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>
      <div className="flex flex-col items-start gap-1">
        <h3 className="font-semibold text-xl xl:text-3xl">Dante Nero</h3>
        <span className="font-normal text-base">Supervisor</span>
      </div>
    </div>
  );
};

export default ProfilePicture;