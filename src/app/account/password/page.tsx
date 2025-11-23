import Heading from "@/components/Heading";
import AccountTabs from "@/features/account/components/account-tabs";

const ProfilePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Password"
        description="Keep Your Account Secure."
        tabs={<AccountTabs />}
      />
    </div>
  );
};

export default ProfilePage;
