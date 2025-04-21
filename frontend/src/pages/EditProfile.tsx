import BasicInfoForm from "../components/EditProfile/BasicInfoForm";
import DeleteAccountModal from "../components/EditProfile/DeleteAccountModal";
import IntegrationSection from "../components/EditProfile/IntegrationSection";
import ProfileHeader from "../components/EditProfile/ProfileHeader";
import ProfilePicture from "../components/EditProfile/ProfilePicture";


const EditProfile = () => {
  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-7 xl:gap-8">
        <ProfileHeader />
        <ProfilePicture />
        <BasicInfoForm />
        <IntegrationSection />
        <DeleteAccountModal />
      </div>
    </div>
  );
};

export default EditProfile;
