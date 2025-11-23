import AccountTabs from "@/app/(auth)/account/_navigation/tabs";
import Heading from "@/components/Heading";

const ProfilePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Profile"
        description="All your profile information."
        tabs={<AccountTabs />}
      />
    </div>
  );
};

export default ProfilePage;
