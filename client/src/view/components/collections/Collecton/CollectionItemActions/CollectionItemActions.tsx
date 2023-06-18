import { ButtonGroup, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { Delete, Details, Edit } from "@mui/icons-material";
import { Collection, isAuth, removeCollection } from "../../../../../data";
import { useState } from "react";
import { CollectionModal } from "..";

export const CollectionItemActions = ({
  collectionId,
  collection,
}: {
  collectionId: string;
  collection?: Collection;
}) => {
  const [open, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!open);
  };

  const handleRemove = () => {
    removeCollection(collectionId);
  };

  return (
    <>
      {isAuth() ? (
        <ButtonGroup>
          <Tooltip title="View Details" placement="top" arrow>
            <IconButton component={Link} to={`/collections/${collectionId}`}>
              <Details color="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit Collection" placement="top" arrow>
            <IconButton color="inherit" onClick={handleIsOpen}>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Collection" placement="top" arrow>
            <IconButton color="inherit" onClick={handleRemove}>
              <Delete />
            </IconButton>
          </Tooltip>
          <CollectionModal
            isOpen={open}
            onClose={handleIsOpen}
            collectionId={collectionId}
            collection={collection}
          />
        </ButtonGroup>
      ) : (
        <Tooltip title="View Details" placement="top" arrow>
          <IconButton component={Link} to={`/collections/${collectionId}`}>
            <Details color="inherit" />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};
