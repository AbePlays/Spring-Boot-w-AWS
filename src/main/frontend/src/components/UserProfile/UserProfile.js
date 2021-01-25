import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    console.log(file);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

const UserProfile = ({ userProfiles }) => {
  return (
    <div>
      {userProfiles.map((userProfile) => {
        return (
          <div key={userProfile.userProfileId}>
            <h1>{userProfile.userName}</h1>
            <Dropzone />
          </div>
        );
      })}
    </div>
  );
};

export default UserProfile;
