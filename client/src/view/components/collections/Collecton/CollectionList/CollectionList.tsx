import { CollectionListProps } from "./CollectionListProps.ts";
import { CollectionListItem } from "../CollectionListItem/CollectionListItem.tsx";
import { Box } from "@mui/material";

export const CollectionList = ({ collections }: CollectionListProps) => {
  return (
    <div className={"flex flex-row gap-5"}>
      {collections.map(collection => (
        <Box key={collection._id}>
          <CollectionListItem collection={collection} />
        </Box>
      ))}
    </div>
  );
};
