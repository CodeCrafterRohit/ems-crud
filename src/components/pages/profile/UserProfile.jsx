import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import ProfileContent from "./ProfileContent";

const UserProfile = () => {
  return (
    <section className="flex w-full min-h-[calc(100vh - 80px)] pt-10">
      <ProfileSidebar />
      <ProfileContent />
    </section>
  );
};

export default UserProfile;
