import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import axios from "axios";
import {
  CollectionList,
  CreateBtn,
  ItemList,
  TagCloud,
} from "../../components";
import { Collections as Collection, ROUTER_PATHS } from "../../../data";

export const Collections = () => {
  const location = useLocation();
  const [collections, setCollections] = useState<Collection[]>([]);

  const fetchCollections = async () => {
    try {
      const res = await axios.get<{ collections: Collection[] }>(
        "http://localhost:8080/api/collections"
      );

      setCollections(res.data.collections);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <>
      <ItemList />
      {location.pathname === ROUTER_PATHS.COLLECTIONS ? (
        <>
          <CollectionList collection={collections} />
          <CreateBtn />
        </>
      ) : (
        <Outlet />
      )}
      <TagCloud />
    </>
  );
};
