import { NoImage } from "../../../common";
import { CollectionItemActions } from "../CollectionItemActions/CollectionItemActions.tsx";
import { Collections } from "../../../../../data";

export const CollectionListItem = (collection: Collections) => {
  return (
    <>
      <div
        className={
          "max-w-md flex flex-col items-end rounded shadow-lg bg-white/10 px-1.5 py-2 overflow-y-auto"
        }
      >
        <div className={"flex-1-0 flex flex-row gap-7"}>
          {collection.imageUrl ? (
            <img
              src={collection.imageUrl}
              alt={collection.name}
              className="w-full rounded"
            />
          ) : (
            <NoImage text={"No image"} />
          )}

          <div className={"w-full my-7 flex flex-col gap-0.5"}>
            <div className={"font-bold text-xl mb-2"}>{collection.name}</div>
            <div className={"font-semibold text-xl mb-2"}>
              Category: {collection.theme}
            </div>
            <p className={"text-gray-300 text-base"}>
              Description: {collection.description}
            </p>
            {collection.fields.map(field => (
              <div key={field.name}>{field.type + ": " + field.name}</div>
            ))}
          </div>
        </div>
        <CollectionItemActions
          collectionId={collection._id ? collection._id : ""}
          collection={collection}
        />
      </div>
    </>
  );
};
