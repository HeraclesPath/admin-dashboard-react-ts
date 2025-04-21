import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProfileHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col xl:flex-row items-start justify-between gap-3 xl:gap-0">
      <h2 className="font-bold text-2xl xl:text-4xl text-base-content dark:text-neutral-200">
        My Profile
      </h2>
      <div className="w-full xl:w-auto grid grid-cols-2 xl:flex gap-3">
        <button
          onClick={() => navigate('/profile')}
          className="btn btn-block xl:w-auto dark:btn-neutral"
        >
          Discard Changes
        </button>
        <button
          onClick={() => {
            navigate('/profile');
            toast('Oops! Nothing to display for this selection.', { icon: '😛' });
          }}
          className="btn btn-block xl:w-auto btn-primary"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;