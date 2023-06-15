import { ButtonGroup, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { Delete, Details, Edit } from "@mui/icons-material";

export const CollectionItemActions = ({
  collectionId,
}: {
  collectionId: string;
}) => {
  return (
    <ButtonGroup>
      <Tooltip title="View Details" placement="top" arrow>
        <IconButton component={Link} to={`/collections/${collectionId}`}>
          <Details color="warning" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit Collection" placement="top" arrow>
        <IconButton color="info">
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete Collection" placement="top" arrow>
        <IconButton color="error">
          <Delete />
        </IconButton>
      </Tooltip>
    </ButtonGroup>
  );
};
