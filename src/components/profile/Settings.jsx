import UpdateSettingsForm from './UpdateSettingsForm';
import SocialMediaForm from './SocialMediaForm';

const Settings = () => {
  return (
    <>
      <div className='pt-8 space-x-8'>
        <UpdateSettingsForm />
        {/* <!--end account-->*/}

        {/* <!--end profile-->*/}
        <SocialMediaForm />
        {/* <!--end socia-media-->*/}
      </div>
    </>
  );
};

export default Settings;
