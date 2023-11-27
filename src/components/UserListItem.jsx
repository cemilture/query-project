/* eslint-disable react/prop-types */
import AlbumList from "./AlbumList";
import ExpandablePanel from "./ExpandablePanel";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRemoveUserMutation } from "../store/apis/usersApi";
import { CircularProgress } from "@mui/material";

function UserListItem({ user }) {
  const [removeUser, results] = useRemoveUserMutation();

  const handleClick = () => {
    removeUser(user);
  };
  const header = (
    <>
      <button
        style={{ marginRight: "30px", border: "none" }}
        onClick={handleClick}
      >
        {results.isLoading ? (
          <CircularProgress style={{ width: "24px", height: "24px" }} />
        ) : (
          <DeleteIcon />
        )}
      </button>
      {user.name}
    </>
  );

  return (
    <div>
      <ExpandablePanel header={header}>
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  );
}

export default UserListItem;
