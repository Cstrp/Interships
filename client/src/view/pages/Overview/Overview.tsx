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

export const Overview = observer(() => {
  const { pathname } = useLocation();
  const [loaded, setLoaded] = useState<boolean>(false);

  const { collections } = collectionStore;

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

    const collectionTimer = setInterval(() => {
      fetchCollections();
    }, 7777);

    return () => {
      clearInterval(collectionTimer);
    };
  }, []);

  return (
    <>
      {pathname === ROUTER_PATHS.COLLECTIONS ? (
        <>
          {loaded ? (
            <>
              <CollectionList collections={collections} />
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
