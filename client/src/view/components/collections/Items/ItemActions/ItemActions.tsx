import { ButtonGroup, IconButton, Tooltip } from "@mui/material";
import { Delete, Details, Edit } from "@mui/icons-material";
import { Item, removeItem } from "../../../../../data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ItemModal } from "..";

export const ItemActions = ({ item }: { item: Item }) => {
  const [open, setOpen] = useState<boolean>(false);
  const itemId = item._id;

  const handleIsOpen = () => {
    setOpen(!open);
  };

  const handleRemove = () => {
    if (itemId) {
      removeItem(itemId);
    }
  };

  return (
    <>
      <ButtonGroup>
        <Tooltip title="View Details" placement="top" arrow>
          <IconButton component={Link} to={`/items/${item._id}`}>
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
      </ButtonGroup>

      <ItemModal
        isOpen={open}
        onClose={handleIsOpen}
        itemId={itemId || ""}
        item={item}
      />
    </>
  );
};
