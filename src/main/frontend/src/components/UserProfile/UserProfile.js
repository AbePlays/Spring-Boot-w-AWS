import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ userProfileId }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      console.log(file);

      const formData = new FormData();
      formData.append("file", file);

      fetch(
        `http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      )
        .then(() => console.log("Request sent succesfully"))
        .catch((e) => console.log(e));
    },
    [userProfileId]
  );
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
            <Dropzone userProfileId={userProfile.userProfileId} />
          </div>
        );
      })}
    </div>
  );
};

export default UserProfile;
