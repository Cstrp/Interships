import { CollectionListProps } from "./CollectionListProps.ts";
import { CollectionListItem } from "../CollectionListItem/CollectionListItem.tsx";
import { Box } from "@mui/material";

export const CollectionList = ({ collection }: CollectionListProps) => {
  return (
    <div className={"flex flex-row gap-5"}>
      {collection.map(c => (
        <Box key={c._id}>
          <CollectionListItem
            _id={c._id}
            name={c.name}
            description={c.description}
            theme={c.theme}
            imageUrl={c.imageUrl}
            fields={c.fields}
          />
        </Box>
      ))}
    </div>
  );
};
