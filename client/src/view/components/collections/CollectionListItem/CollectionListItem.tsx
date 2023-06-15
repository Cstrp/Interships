import { CollectionListItemProps } from "./CollectionListItemProps.ts";
import { NoImage } from "../../common";
import { CollectionItemActions } from "../CollectionItemActions/CollectionItemActions.tsx";

export const CollectionListItem = ({
  _id,
  name,
  imageUrl,
  description,
  fields,
  theme,
}: CollectionListItemProps) => {
  return (
    <>
      <div
        className={
          "max-w-md flex flex-col items-end rounded shadow-lg bg-white/10 px-1.5 py-2"
        }
      >
        <div className={"flex flex-row gap-7"}>
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full rounded" />
          ) : (
            <NoImage text={"No image"} />
          )}

          <div className={"w-full my-7 flex flex-col gap-0.5"}>
            <div className={"font-bold text-xl mb-2"}>{name}</div>
            <div className={"font-semibold text-xl mb-2"}>
              Category: {theme}
            </div>
            <p className={"text-gray-300 text-base"}>
              Description: {description}
            </p>
            {fields.map(field => (
              <div key={field.name}>{field.type + ": " + field.name}</div>
            ))}
          </div>
        </div>
        <CollectionItemActions collectionId={_id ? _id : ""} />
      </div>
    </>
  );
};
