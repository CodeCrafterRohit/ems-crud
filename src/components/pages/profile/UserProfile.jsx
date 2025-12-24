import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import ProfileContent from "./ProfileContent";

const UserProfile = () => {
  return (
    <section className="flex">
      <ProfileSidebar />
      <ProfileContent />
    </section>
  );
};

export default UserProfile;
