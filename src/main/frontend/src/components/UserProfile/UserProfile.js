const UserProfile = ({ userProfiles }) => {
  return (
    <div>
      {userProfiles.map((userProfile) => {
        return (
          <div key={userProfile.userProfileId}>
            <h1>{userProfile.userName}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default UserProfile;
