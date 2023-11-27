import { CircularProgress } from "@mui/material";
import { useRemovePhotoMutation } from "../store";
import DeleteIcon from "@mui/icons-material/Delete";

/* eslint-disable react/prop-types */
function PhotoListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div style={{ margin: "20px", position: "relative" }}>
      <img src={photo.url} alt="" />
      <button onClick={handleRemovePhoto} className="deleteCircularButton">
        {results.isLoading ? (
          <CircularProgress
            style={{ width: "24px", height: "24px", color: "red" }}
          />
        ) : (
          <DeleteIcon />
        )}
      </button>
    </div>
  );
}

export default PhotoListItem;
