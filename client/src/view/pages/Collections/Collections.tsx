import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CollectionList, CreateBtn, TagCloud } from "../../components";
import {
  api,
  Collection as Collection,
  collectionStore,
  isAuth,
  ROUTER_PATHS,
} from "../../../data";
import { CircularProgress } from "@mui/material";
import { observer } from "mobx-react";

export const Collections = observer(() => {
  const location = useLocation();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await api.get<{ collections: Collection[] }>(
          "/collections"
        );

        collectionStore.setCollection(res.data.collections);
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded(true);
      }
    };

    fetchCollections();
  }, []);

  return (
    <>
      {location.pathname === ROUTER_PATHS.COLLECTIONS ? (
        <>
          {loaded ? (
            <>
              <CollectionList collections={collectionStore.collections} />
              {isAuth() && <CreateBtn />}
            </>
          ) : (
            <div className={"flex items-center justify-center"}>
              <CircularProgress color="inherit" />
            </div>
          )}
        </>
      ) : (
        <Outlet />
      )}

      <TagCloud />
    </>
  );
});
