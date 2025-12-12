import AccountTabs from "@/app/(auth)/account/_navigation/tabs";
import { CardCompact } from "@/components/card-compact";
import Heading from "@/components/Heading";
import PasswordChangeForm from "@/features/password/components/password-change-form";

const ProfilePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Password"
        description="Keep Your Account Secure."
        tabs={<AccountTabs />}
      />

      <div className="flex flex-1 flex-col items-center">
        <CardCompact
          title="Change Password"
          description="Enter your current password."
          className="animate-fade-in-from-top w-full max-w-[420px]"
          content={<PasswordChangeForm />}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
