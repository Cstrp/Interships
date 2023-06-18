import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CollectionList, CreateBtn, TagCloud } from "../../components";
import {
  api,
  Collections as Collection,
  isAuth,
  ROUTER_PATHS,
} from "../../../data";
import { CircularProgress } from "@mui/material";

export const Collections = () => {
  const location = useLocation();
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await api.get<{ collections: Collection[] }>(
          "/collections"
        );

        setCollections(res.data.collections);
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
              <CollectionList collection={collections} />
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
};
