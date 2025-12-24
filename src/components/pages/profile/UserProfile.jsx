import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import ProfileContent from "./ProfileContent";

const UserProfile = () => {
  return (
    <section className="flex pt-18">
      <ProfileSidebar />
      <ProfileContent />
    </section>
  );
};

export default UserProfile;
